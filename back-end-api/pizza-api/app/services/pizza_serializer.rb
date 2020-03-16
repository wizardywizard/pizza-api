class PizzaSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :cheese, :sauce 
    has_many :toppings
end