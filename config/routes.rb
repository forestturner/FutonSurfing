Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :futons, only: [:index, :show, :create, :update]
    resources :users, only: [:create,:index,:show, :update]
    resource :session, only: [:create, :destroy]
    resources :bookings, only: [:create,:destroy, :show, :index]
  end

  root to: 'static_pages#root'

end
