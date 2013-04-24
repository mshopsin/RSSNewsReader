NewsReader::Application.routes.draw do
  resources :feeds do
    resources :entries, :only => [ :show, :index ]
  end

  root :to => "feeds#index"
end
