class AddToppingsToPizza < ActiveRecord::Migration[6.0]
  def change
    add_reference :toppings, :pizza, foreign_key: true
  end
end
