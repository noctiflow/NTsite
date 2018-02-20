Rails.application.routes.draw do
  scope "(:locale)", locale: /en|zh_TW/ do

  root 'home#index'
  get 'portfolio' => 'portfolio#index'

  resources "contacts", only: [:new, :create]

  end
end
