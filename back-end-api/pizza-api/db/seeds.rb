# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pizza.create!([
    {name: "the big cheese", sauce: "cheese sauce", cheese: "xtra cheese"}
])

Toppings.create!([
    {name: "pepperoni", meat: true, pizza_id: 1},
    {name: "Ham", meat: true, pizza_id: 1},
    {name: "Italian Sausage", meat: true, pizza_id: 1}
])
