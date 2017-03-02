Rails.application.routes.draw do
  root :to => 'static_pages#home'
  get 'test' => 'static_pages#test'
end
