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
    <form id="addTopping">
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