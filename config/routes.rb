NewsReader::Application.routes.draw do
  resources :feeds do
    resources :entries, :only => [:show]
  end

  root :to => "feeds#index"
end
