# json.array! @bookings
# json.array! @guests
@bookings.each do |booking|
  json.set! booking.id do
    json.partial! 'booking', booking: booking
  end
end
#
#
#
#
@guests.each do |guestbooking|
  json.set! guestbooking.id do
    json.partial! 'guestbooking', guestbooking: guestbooking
  end
end
