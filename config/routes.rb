Rails.application.routes.draw do
  # URL直叩き用
  get "/" => "time_card#index"
  
  # ajax用
  get "/time_card_in" => "time_card#time_card_in"
  get "/time_card_in" => "time_card#time_card_in"

end

