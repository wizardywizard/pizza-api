class PizzaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :sauce, :cheese
  has_many :toppings
end
