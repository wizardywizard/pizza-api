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