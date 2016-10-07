class Api::FutonsController < ApplicationController
  def index()

<<<<<<< HEAD
    futons = bounds ? Futon.in_bounds(bounds) : []
    # byebug
=======
    futons = bounds ? Futon.in_bounds(bounds) : Futon.all
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
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
<<<<<<< HEAD
    params.require(:futon).permit(:lat,:lng,:description,:futon_img_url,:address, :bookings, :user)
=======
    params.require(:futon).permit(:lat,:lng,:description,:futon_img_url,:address, :bookings)
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
  end


  def bounds
    params[:bounds]
  end
end
