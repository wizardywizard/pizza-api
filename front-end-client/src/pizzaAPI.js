// class PizzaAPI {
//     constructor(baseUrl){
//         this.baseUrl = baseUrl
//     }
//      getPizzas(){
//          fetch(this.base_url)
//         .then(res => res.json())
//         .then(pizzas => {
//             debugger})
//     }

//     static getPizzaShow(pizzaId){
//         return fetch(`${PizzaAPI.base_url}/pizzas/${pizzaId}`)
//         .then(res => res.json())
//         .then(json => {
//             const {
//                 data: {
//                     id,
//                     attributes: {
//                         name,
//                         sauce,
//                         cheese,
//                     }
//                 },
//                 included
//             } = json
//             return {
//                 id,
//                 name,
//                 sauce,
//                 cheese,
//                 toppings: included.map(({id, attributes: {name, meat, pizza_id}}) =>{
//                     return {
//                         id,
//                         name,
//                         meat,
//                         pizza_id
//                     }
//                 })
//             }
//         })
//     }

//     static createPizza(pizzaAttributes) {
//         return fetch(`${PizzaAPI.base_url}/pizzas`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(pizzaAttributes)
//         })
//         .then(res => res.json())
//     }
// }

