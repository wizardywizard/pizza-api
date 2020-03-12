require 'test_helper'

class ToppingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @topping = toppings(:one)
  end

  test "should get index" do
    get toppings_url, as: :json
    assert_response :success
  end

  test "should create topping" do
    assert_difference('Topping.count') do
      post toppings_url, params: { topping: { meat: @topping.meat, name: @topping.name, vegetable: @topping.vegetable } }, as: :json
    end

    assert_response 201
  end

  test "should show topping" do
    get topping_url(@topping), as: :json
    assert_response :success
  end

  test "should update topping" do
    patch topping_url(@topping), params: { topping: { meat: @topping.meat, name: @topping.name, vegetable: @topping.vegetable } }, as: :json
    assert_response 200
  end

  test "should destroy topping" do
    assert_difference('Topping.count', -1) do
      delete topping_url(@topping), as: :json
    end

    assert_response 204
  end
end
