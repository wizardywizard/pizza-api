# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pizza.create([
    {
        name: "the big cheese",
        sause: "cheese sauce",
        cheese: "extra cheese"
    },
    {
        name: "the reg",
        sause: "pizza sauce",
        cheese: "mozeriala cheese"
    }
])

Topping.create([
    {
        name: "Ham",
        meat: true,
        vegetable: false
    },
    {
        name: "Beef",
        meat: true,
        vegetable: false  
    },
    {
        name: "Salami",
        meat: true,
        vegetable: false 
    },
    {
        name: "Pepperoni",
        meat: true,
        vegetable: false
    },
    {
        name: "Italian Sausage",
        meat: true,
        vegetable: false
    },
    {
        name: "Premium Chicken",
        meat: true,
        vegetable: false
    },
    {
        name: "Bacon",
        meat: true,
        vegetable: false 
    },
    {
        name: "Philly Steak",
        meat: true,
        vegetable: false
    },
    {
        name: "Garlic",
        meat: false,
        vegetable: true
    },
    {
        name: "Jalapeno",
        meat: false,
        vegetable: true
    },
    {
        name: "Onions",
        meat: false,
        vegetable: true
    },
    {
        name: "Banana Peppers",
        meat: false,
        vegetable: true
    },
    {
        name: "Diced Tomatos",
        meat: false,
        vegetable: true
    },
    {
        name: "Black Olives",
        meat: false,
        vegetable: true
    },
    {
        name: "Mushrooms",
        meat: false,
        vegetable: true
    },
    {
        name: "Pineapple",
        meat: false,
        vegetable: true
    },
    {
        name: "Green Peppers",
        meat: false,
        vegetable: true
    },
    {
        name: "Spinach",
        meat: false,
        vegetable: true
    },
    {
        name: "Red Peppers",
        meat: false,
        vegetable: true
    }
])