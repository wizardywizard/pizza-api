class AddToppingsToPizza < ActiveRecord::Migration[6.0]
  def change
    add_reference :toppings, :pizzas, foreign_key: true
  end
end
