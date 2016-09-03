@futons.each do |futon|
  json.set! futon.id do
    json.partial! 'futon', futon: futon
  end
end
