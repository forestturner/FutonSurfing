class Api::BookingsController < ApplicationController


  def index
    @bookings = Booking.where(guest_id: current_user.id).includes(:host)
    @guests = Booking.where(futon_id: current_user.rented_futon.id).includes(:guest)
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
    params.require(:booking).permit(:futon_id, :start_date, :end_date)
  end

end
