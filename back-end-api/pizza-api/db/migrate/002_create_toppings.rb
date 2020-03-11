class CreateToppings < ActiveRecord::Migration[6.0]
    def change
      create_table :toppings do |t|
        t.string :name
        
      end
    end
  end