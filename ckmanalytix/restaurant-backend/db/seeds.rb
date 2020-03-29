require 'csv'

filename = "/Users/Joseph/Documents/restaurant_grades_sample.csv"

CSV.foreach(filename, :headers => true, encoding:'iso-8859-1:utf-8') do |row|
  new_hash = {}
  row.to_hash.each_pair do |k,v|
   new_hash.merge!({k.downcase => v})
  end

  Grade.create!(new_hash)
end
