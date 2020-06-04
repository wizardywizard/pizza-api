function getPizzas(){
    fetch("http://localhost:3000/pizzas")
   .then(res => res.json())
   .then(pizzas => {
       debugger})
}

// const pizzaApi = new PizzaAPI()
getPizzas()






// document.addEventListener('DOMContentLoaded', () => {
//     let root = document.getElementById('root')
//     root.innerHTML = loadingGif()
//     Pizza.getAll().then(pizzas => {
//         root.innerHTML = new PizzaPage(pizzas).render()
//     })
//     document.addEventListener('click', (e) => {
//         if(e.target.matches(".pizzaShow")) {
//             let pizza = Pizza.findById(e.target.dataset.pizzaid)
//             pizza.getPizzaDetails().then(pizza => {
//                 root.innerHTML = new PizzaShowPage(pizza).render()
//             })
//         }
//         if(e.target.matches('.pizzaIndex')) {
//             debugger
//             root.innerHTML = new PizzaPage(Pizza.all).render()
//         }
//     })
//     document.addEventListener('submit', (e) => {
//         e.preventDefault()
//         if(e.target.matches('.addPizza')) {
//           let formData = {}
//           e.target.querySelectorAll('input[type="text"]').forEach(input => formData[input.id] = input.value)
//           Pizza.create(formData)
//             .then(pizza => {
//               document.querySelector('#pizzas').insertAdjacentHTML('beforeend', pizza.renderCard())
//             })
//         }
//     })
//     const toppings = document.getElementById('addTopping')

//         toppings.addEventListener('submit', () => {
//             console.log("hello")
//     })

// })

// const loadingGif = () => {
//     let loading = document.createElement('img')
//     loading.src = 'https://i.giphy.com/media/y1ZBcOGOOtlpC/giphy.webp'
//     return loading.outerHTML
//   }






