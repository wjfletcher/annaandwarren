Rails.application.routes.draw do
  root "home#index"

  resources :boothbay, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :mailers
    end
  end
end
