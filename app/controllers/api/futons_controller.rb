class Api::FutonsController < ApplicationController
  def index()

    futons = bounds ? Futon.in_bounds(bounds) : []

    futons = bounds ? Futon.in_bounds(bounds) : Futon.all
    @futons = futons
    render :index
  end
  def show()
    @futon = Futon.find(params[:id])
  end
  def create()
    @futon = Futon.new(futon_params)
    @futon.user_id = current_user.id
    @futon.save
    render :show
  end
  def update
    @futon = Futon.find(params[:id])
    if @futon.update(futon_params)
      render :show
    else
      render json: @futon.errors.full_messages, status: 422
    end
  end
  def destroy
    @futon = futon.find_by(id: params[:id])
    @futon.destroy
    render json: {}
  end


  private
  def futon_params()

    params.require(:futon).permit(:lat,:lng,:description,:futon_img_url,:address, :bookings, :user)

    params.require(:futon).permit(:lat,:lng,:description,:futon_img_url,:address, :bookings)
  end


  def bounds
    params[:bounds]
  end
end
