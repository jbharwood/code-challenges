require 'pry'

class HashMap

  attr_accessor :buckets, :num_buckets

  def initialize()
    @num_buckets = 25
    @buckets = Hash.new()
  end

  def add(input)
    if !!buckets[self.hash(input)]
      p "Already in hashmap"
    else
      p "Not in hashmap"
      buckets[self.hash(input)] = input
    end
  end

  def hash(input)
    num = 0
    arr = input.split('')
    arr.each_with_index do |val, index|
      num += val.ord * index
    end
    return num % num_buckets
  end

  def get(input)
    return buckets[self.hash(input)]
  end

end

h = HashMap.new()
h.add("bob")
h.add("bob")
p h.get("bob")
p h.get("steve")
