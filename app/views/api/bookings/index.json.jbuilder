json.array! @bookings
json.array! @guests
# @bookings.each do |booking|
#   json.set! booking.id do
#     json.partial! 'booking', booking: booking
#   end
# end
#
#
#
#
# @guests.each do |guest|
#   json.set! guest.id do
#     json.partial! 'guestbooking', guest: guest
#   end
# end
