Rails.application.routes.draw do
  root to: 'food#home'

  get '*path' => redirect { '/' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
