extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
stylesheets_path = File.join(extension_path, 'sass')

if (defined? Compass)
  Compass::Frameworks.register('bemify', :path => extension_path, :stylesheets_directory => stylesheets_path)
else
  if ENV.has_key?("SASS_PATH")
    ENV["SASS_PATH"] = ENV["SASS_PATH"] + File::PATH_SEPARATOR + stylesheets_path
  else
    ENV["SASS_PATH"] = stylesheets_path
  end
end

module Bemify
  VERSION = "0.1.2"
  DATE = "2016-03-30"
end
