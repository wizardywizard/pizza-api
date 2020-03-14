class ToppingsController < ApplicationController
  before_action :set_topping, only: [:show, :update, :destroy]

  # GET /toppings
  def index
    @toppings = Topping.all

    render json: @toppings
  end

  # GET /toppings/1
  def show
    render json: @topping
  end

  # POST /toppings
  def create
    @topping = Topping.new(topping_params)

    if @topping.save
      render json: @topping, status: :created, location: @topping
    else
      render json: @topping.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /toppings/1
  def update
    if @topping.update(topping_params)
      render json: @topping
    else
      render json: @topping.errors, status: :unprocessable_entity
    end
  end

  # DELETE /toppings/1
  def destroy
    @topping.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topping
      @topping = Topping.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def topping_params
      params.require(:topping).permit(:name, :meat)
    end
end
