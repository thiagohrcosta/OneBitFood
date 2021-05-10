class OrdersController < ApplicationController
  def create
    order = Order.new(order_params)
    if order.save
      render json: @order, status: :created
    else
      render json: order.errors, stratus: :unprocessable_entity
    end
  end

  def show
  end
end
