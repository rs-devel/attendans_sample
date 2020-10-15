Rails.application.routes.draw do
  get '/' => 'time_card#index'
  
  # ajax用
  get '/all_data' => 'time_card#all_data'
  post "/time_card_in" => "time_card#time_card_in"
  post "/time_card_out" => "time_card#time_card_out"
  
end
