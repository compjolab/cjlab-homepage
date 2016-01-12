desc "Just push it, via s3_website push"
task :shoop do |t, args|
  puts "Pushing it real good..."
  IO.popen("bundle exec jekyll build && bundle exec s3_website push").each do |line|
    p line.chomp
  end
end
