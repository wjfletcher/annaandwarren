Rails.application.routes.draw do
  root "home#index"

  resources :boothbay, only: [:index]
end
