<<<<<<< HEAD
# json.set! @booking.id do
#   json.partial! '/api/bookings/booking', booking: @booking
# end
#
json.partial! 'booking', booking: @booking
=======
json.set! @booking.id do
  json.partial! '/api/bookings/booking', booking: @booking
end
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
