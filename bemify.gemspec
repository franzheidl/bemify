require './lib/bemify'

Gem::Specification.new do |s|
  s.version = Bemify::VERSION
  s.date = Bemify::DATE

  # Gem Details
  s.name = "bemify"
  s.description = %q{Bemify is a set of mixins to help you write well-structured, component-based modular SCSS source using a BEM-style syntax.}
  s.summary = %q{Sass Mixins to write BEM-style SCSS source}
  s.authors = ["Franz Heidl"]
  s.homepage = "https://github.com/franzheidl/bemify"

  # LICENSE file
  s.licenses = ['MIT']

  # README file
  s.files = ["README.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("sass/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}

  # Gems Dependencies
  s.add_dependency("sass", ["~> 3.3"])

end
