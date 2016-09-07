json.id booking.id
json.futon_id booking.futon_id
json.guest_id booking.guest_id
json.start_date booking.start_date
json.end_date booking.end_date
json.user do
  json.id booking.host.id
  json.firstname booking.host.firstname
  json.lastname booking.host.lastname
  json.city booking.site.city
  json.profile_img_url booking.host.profile_img_url
end
