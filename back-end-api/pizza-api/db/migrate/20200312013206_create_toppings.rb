class CreateToppings < ActiveRecord::Migration[6.0]
  def change
    create_table :toppings do |t|
      t.string :name
      t.boolean :meat

      t.timestamps
    end
  end
end
