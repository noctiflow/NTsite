Rails.application.routes.draw do
  scope "(:locale)", locale: /en|zh_TW/ do

  root 'home#index'
  get 'portfolio' => 'portfolio#index'

  match '/contacts',     to: 'contacts#new',             via: 'get'
  resources "contacts", only: [:new, :create]

  end
end
