notification :off
 
# Use Sass
guard 'sass', :input => 'assets/styles/sass', :output => 'assets/styles'

# or Compass
# guard :compass, configuration_file: 'assets/styles/config.rb' do
#	watch(%r{(.*)\.s[ac]ss$})
# end

# Jekyll
guard 'jekyll-plus', :config => ['_config.yml', '_override.yml'] do
  watch /.*/
  ignore /_site/
end
 
# LiveReload https://github.com/guard/guard-livereload
require 'find'
if Find.find(Dir.pwd).detect{|dir|dir=~/.+\.(css|md|html|js)$/}
  guard 'livereload', :grace_period => 0.5 do
    watch(%r{.+\.(css|md|html|js)$})
  end
end




