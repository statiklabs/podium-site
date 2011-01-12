set :application, "podium-site"
set :repository,  "git@git.statiklabs.com:podium-site"
set :scm, :git
set :deploy_via, :remote_cache
set :branch, "master"
set :user, "ysarazin"
set :runner, "ysarazin"
set :deploy_to, "/var/www/#{application}"
set :keep_releases, 8
set :ssh_options, {:forward_agent => true}
role :app, "97.107.139.12"
role :web, "97.107.139.12"
role :db,  "97.107.139.12", :primary => true

default_run_options[:pty] = true

namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} /etc/init.d/httpd reload"
  end
end