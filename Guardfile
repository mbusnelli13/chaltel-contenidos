notification :off
 
# Sass
guard 'sass', :input => 'css/_sass', :output => 'css'
 
# Jekyll
guard 'jekyll-plus', :config => ['_config.yml'] do
  watch /.*/
  ignore /_site/
end
 
# LiveReload https://github.com/guard/guard-livereload
require 'find'
if Find.find(Dir.pwd).detect{|dir|dir=~/.+\.(css|html|js)$/}
  guard 'livereload', :grace_period => 0.5 do
    watch(%r{.+\.(css|html|js)$})
  end
end




