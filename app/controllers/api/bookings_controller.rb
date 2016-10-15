class Api::BookingsController < ApplicationController
   #
  #  before_action :ensure_logged_in
  def index
    if current_user
      @bookings = Booking.where(guest_id: current_user.id).includes(:host)
      if current_user.futon
        @guests = Booking.where(futon_id: current_user.futon.id).includes(:guest)
      else
        @guests = {}
      end
    else
      @bookings = {}
      @guests = {}
    end
      # byebug
  end


  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy

    @booking = Booking.find_by(id: params[:id])
    @booking.destroy
    render json: {}
  end

  def booking_params
    params.require(:booking).permit(:futon_id, :start_date, :end_date, :host, :guest, :futon,:rented_futon)
  end

end
