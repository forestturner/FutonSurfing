# json.set! @booking.id do
#   json.partial! '/api/bookings/booking', booking: @booking
# end
#
json.partial! 'booking', booking: @booking
