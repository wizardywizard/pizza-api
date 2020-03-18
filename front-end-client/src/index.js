class PizzaAPI{
    static getPizza(){
        return fetch(`${PizzaAPI.base_url}/pizzas`).then(res => res.json())
    }

    static getPizzaShow(pizzaId){
        return fetch(`${PizzaAPI.base_url}/pizzas/${pizzaId}`)
        .then(res => res.json())
        .then(json => {
            debugger
        })
    }

}
PizzaAPI.base_url = "http://localhost:3000"