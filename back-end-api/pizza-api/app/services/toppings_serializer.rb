class ToppingsSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :meat, :pizza_id
end