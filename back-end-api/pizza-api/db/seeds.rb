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
        sauce: "cheese sauce",
        cheese: "extra cheese"
    },
    {
        name: "the reg",
        sauce: "pizza sauce",
        cheese: "mozeriala cheese"
    }
])

Topping.create([
    {
        name: "Ham",
        meat: true
    },
    {
        name: "Beef",
        meat: true
    },
    {
        name: "Salami",
        meat: true 
    },
    {
        name: "Pepperoni",
        meat: true
    },
    {
        name: "Italian Sausage",
        meat: true
    },
    {
        name: "Premium Chicken",
        meat: true
    },
    {
        name: "Bacon",
        meat: true 
    },
    {
        name: "Philly Steak",
        meat: true
    },
    {
        name: "Garlic",
        meat: false
    },
    {
        name: "Jalapeno",
        meat: false
    },
    {
        name: "Onions",
        meat: false
    },
    {
        name: "Banana Peppers",
        meat: false
    },
    {
        name: "Diced Tomatos",
        meat: false
    },
    {
        name: "Black Olives",
        meat: false
    },
    {
        name: "Mushrooms",
        meat: false
    },
    {
        name: "Pineapple",
        meat: false
    },
    {
        name: "Green Peppers",
        meat: false
    },
    {
        name: "Spinach",
        meat: false
    },
    {
        name: "Red Peppers",
        meat: false
    }
])