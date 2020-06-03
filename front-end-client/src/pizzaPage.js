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