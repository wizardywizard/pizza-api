class PizzaAPI{
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
                Pizza.all = pizzas.map(pizzaAttributes =>
                    new Pizza(pizzaAttributes)
                )
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
            return new Pizza(pizzaJSON).save()
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
                toppings.map(toppingsAttributes => toppings.findOrCreateBy(toppingsAttributes))
                return this
            })
        }else {
            return Promise.resolve(this)
        }
    }

    toppings() {
        return this.toppings.all.filter(topping => topping.pizza_id == this.id)
    }

    renderCard() {
        let article = document.createElement('article')
        article.className = "fl w-100 w-50-m  w-25-ns pa2-ns"
        article.dataset['pizza_id'] = this.mbid
        article.innerHTML = `
          <div class="aspect-ratio aspect-ratio--1x1">
            <img style="background-image:url(${this.image_url});" 
            class="db bg-center cover aspect-ratio--object" />
          </div>
          <a href="#0" class="ph2 ph0-ns pb3 link db">
            <h3 class="f5 f4-ns mb0 black-90">${this.name}</h3>
          </a>
          <p><a href="#/pizzas/${this.id}" class="pizzaShow ba1 pa2 bg-moon-gray link" data-pizzaid="${this.id}">Pizza Details</a></p>
        `
        return article.outerHTML
    }
}

Pizza.all = []

















