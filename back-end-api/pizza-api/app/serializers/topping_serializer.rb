class ToppingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :meat, :pizza_id
  belongs_to :pizza
end
