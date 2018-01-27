Rails.application.routes.draw do

  root 'home#index'
  get 'portfolio' => 'portfolio#index'

end
