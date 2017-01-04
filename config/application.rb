require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module AydarArchitect
  class Application < Rails::Application
  end
end
