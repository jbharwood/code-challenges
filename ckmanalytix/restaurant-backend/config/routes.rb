Rails.application.routes.draw do
  resources :grades
  get 'critical', :to => 'grades#critical_index'
  get 'query', :to => 'grades#query'
  post 'query', :to => 'grades#query'
  # get 'boro', :to => 'grades#boro'
  # post 'boro', :to => 'grades#boro'
  # get 'boro_critical_flags', :to => 'grades#boro_critical_flags'
  # post 'boro_critical_flags', :to => 'grades#boro_critical_flags'
end
