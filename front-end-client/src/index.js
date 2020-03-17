class PizzaAPI{
    static getPizza(){
        return fetch(`${PizzaAPI.base_url}/pizzas`).then(res => res.json())
    }


}
PizzaAPI.base_url = "http://localhost:3000"