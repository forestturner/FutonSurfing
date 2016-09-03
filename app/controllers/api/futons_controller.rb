class Api::FutonsController < ApplicationController
  def index()
    @futons = Futon.all
    render :index
  end
  def show()
    @futon = Futon.find(params[:id])
  end
  def create()
    @futon = Futon.new(futon_params)
    @futon.user_id = currentUser.id
    @futon.save
    render :show
  end
  private
  def futon_params()
    params.require(:futon).permit(:lat,:lng,:description,:futon_img_url)
  end
end
