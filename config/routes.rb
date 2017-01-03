Rails.application.routes.draw do
  root  'static_pages#home'
  get 'test' => 'static_pages#test'
end
