role :app, %w(hosting_gaidr@chromium.locum.ru)
role :web, %w(hosting_gaidr@chromium.locum.ru)
role :db, %w(hosting_gaidr@chromium.locum.ru)

set :ssh_options, forward_agent: true
set :rails_env, :production
