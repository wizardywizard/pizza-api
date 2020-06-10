class PizzaAPI {
    static getPizzas(){
        return fetch(`${PizzaAPI.base_url}/pizzas`).then(res => res.json())
    }

    static getPizzaShow(pizzaId){
        return fetch(`${PizzaAPI.base_url}/pizzas/${pizzaId}`)
        .then(res => res.json())
        .then(json => {
            const {
                data: {
                    id,
                    attributes: {
                        name,
                        sauce,
                        cheese,
                    }
                },
                included
            } = json
            return {
                id,
                name,
                sauce,
                cheese,
                toppings: included.map(({id, attributes: {name, meat, pizza_id}}) =>{
                    return {
                        id,
                        name,
                        meat,
                        pizza_id
                    }
                })
            }
        })
    }

    static createPizza(pizzaAttributes) {
        return fetch(`${PizzaAPI.base_url}/pizzas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(pizzaAttributes)
        })
        .then(res => res.json())
    }
}

PizzaAPI.base_url = "http://localhost:3000"

class Pizza {
    constructor({id, name, sauce, cheese}){
        this.id = id
        this.name = name
        this.sauce = sauce
        this.cheese = cheese
    }

    static getAll() {
        if(Pizza.getAll.length === 0) {
            return PizzaAPI.getPizzas().then(pizzas => {
                Pizza.all = pizzas.map(pizzaAttributes =>{
                   return new Pizza(pizzaAttributes)
                })
                return Pizza.all
            })
        }else{
            return Promise.resolve(Pizza.all)
        }
    }

    static findById(id) {
        return Pizza.all.find( pizza => pizza.id == id)
    }

    static create(pizzaAttributes){
        return PizzaAPI.createPizza(pizzaAttributes)
        .then(pizzaJson => {
            return new Pizza(pizzaJson2).save()
        })
    }

    save(){
        Pizza.all.push(this)
        return this
    }

    getPizzaDetails() {
        if(this.toppings().length === 0) {
            return PizzaAPI.getPizzaShow(this.id)
            .then(({toppings}) => {
                toppings.map(toppingAttributes => Topping.findOrCreateBy(toppingAttributes))
                return this
            })
        }else {
            return Promise.resolve(this)
        }
    }

    toppings() {        
        return Topping.all.filter(topping => topping.pizza_id == this.id)        
    }

    renderCard() {
        let article = document.createElement('article')
        article.className = "fl w-100 w-50-m  w-25-ns pa2-ns"
        article.dataset['pizza_id'] = this.id
        article.innerHTML = `
          <a href="#0" class="ph2 ph0-ns pb3 link db">
            <h3 class="f5 f4-ns mb0 black-90">${this.name}</h3>
          </a>
          <p><a href="#/pizzas/${this.id}" class="pizzaShow ba1 pa2 bg-moon-gray link" data-pizzaid="${this.id}">Pizza Details</a></p>
        `
        return article.outerHTML
    }
}

Pizza.all = []

class Topping {
    constructor({id, name, meat, pizza_id}) {
        this.id = id
        this.name = name
        this.meat = meat
        this.pizza_id = pizza_id
    }

    static findOrCreateBy(toppingAttributes) {      
        let found = Topping.all.find(topping => topping.id == toppingAttributes.id)
        return found ? found : new Topping(toppingAttributes).save()
    }

    save() {
        Topping.all.push(this)
        return this
    }

    render() {
        return `
        <li>${this.name}</li>`
    }
}
 Topping.all = []

class PizzaPage {
    constructor(pizzas) {
        this.pizzas = pizzas
    }

    renderForm() {
        return `
        <form class="addPizza">
          <h3>Add Pizza</h3>
          <p>
            <label class="db">Name</label>
            <input type="text" name="name" id="name" />
          </p>
          <p>
            <label class="db">Cheese</label>
            <input type="text" name="cheese" id="cheese" />
          </p>
          <p>
            <label class="db">Sauce</label>
            <input type="text" name="sauce" id="sauce" />
          </p>
          <input type="submit" value="Add Pizza" />
        </form>
      `
    }

    renderList() {
        return this.pizzas.map(pizza => {
            return pizza.renderCard()
        }).join(' ')
    }

    render() {
        return `
        <h1>Hello from Pizza Grid</h1>
        ${this.renderForm()}
        <section id="pizza">
          ${this.renderList()}
        </section>
      `
    }  
}

class PizzaShowPage {
        constructor(pizza) {
            this.pizza = pizza
    }

    renderToppingPizza() {
        let ul = document.createElement('ul')
        ul.id = "pizzaList"
        this.pizza.toppings().forEach(topping => {
            ul.insertAdjacentHTML('beforeend', topping.render())
        })
        return ul.outerHTML
    }

    renderToppingForm(){
        return`
        <form class="addTopping">
            <h3>Add Topping</h3>
            <p>
                <label class="db">Name</label>
                <input type="text" name="name" id="name" />
            </p>
            <input type="submit" value="Add Topping" />
        </form>
        `
    }

    render() {
        return `    
    <div class="ph2 ph0-ns pb3 link db">
      <h3 class="f5 f4-ns mb0 black-90">${this.pizza.name}</h3>
      <h3 class="f5 f4-ns mb0 black-90">${this.pizza.sauce}</h3>
      <h3 class="f5 f4-ns mb0 black-90">${this.pizza.cheese}</h3>
    </div>
    ${this.renderToppingForm()}
    ${this.renderToppingPizza()}
    `
    }
}

// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root')
    root.innerHTML = loadingGif()
    Pizza.getAll().then(pizzas => {
        root.innerHTML = new PizzaPage(pizzas).render()
    })
    document.addEventListener('click', (e) => {
        if(e.target.matches(".pizzaShow")) {
            let pizza = Pizza.findById(e.target.dataset.pizzaid)
            pizza.getPizzaDetails().then(pizza => {
                root.innerHTML = new PizzaShowPage(pizza).render()
            })
        }
        if(e.target.matches('.pizzaIndex')) {
            root.innerHTML = new PizzaPage(Pizza.all).render()
        }
    })
    document.addEventListener('submit', (e) => {
        e.preventDefault()
        if(e.target.matches('.addPizza')) {
          let formData = {}
          e.target.querySelectorAll('input[type="text"]').forEach(input => formData[input.id] = input.value)
          Pizza.create(formData)
            .then(pizza => {
              document.querySelector('#pizzas').insertAdjacentHTML('beforeend', pizza.renderCard())
            })
        }
    })
    document.addEventListener('submit', (e) =>{
        e.preventDefault()
        if(e.target.matches('.addTopping')){
            console.log("hello")
            let formData = {}
            let userInputFeild =  event.target.querySelector('#name')
            formData.name = userInputFeild.value
            let newTopping = Topping.findOrCreateBy(formData)
            let newList = document.createElement('li') 
            newList.innerText = newTopping.name
            const toppingList = document.querySelector('#pizzaList') 
            toppingList.appendChild(newList)
            userInputFeild.value = ""
        }
    })
})

const loadingGif = () => {
    let loading = document.createElement('img')
    loading.src = 'https://i.giphy.com/media/y1ZBcOGOOtlpC/giphy.webp'
    return loading.outerHTML
  }






