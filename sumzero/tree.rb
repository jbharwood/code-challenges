require 'pry'

# class Node
#   attr_accessor :value, :left, :right
#
#   def initialize(value)
#     @value = value
#   end
# end
#
# def build_tree(array, *indices)
#   array.sort.uniq!
#   mid = (array.length-1)/2
#   first_element = indices[0]
#   last_element = indices[1]
#
#   if !first_element.nil? && first_element > last_element
#     return nil
#   end
#
#   root = Node.new(array[mid])
#   root.left = build_tree(array[0..mid-1], 0, mid-1)
#   root.right = build_tree(array[mid+1..-1], mid+1, array.length-1)
#
#   return root
# end

def bfs(root, target)
  return nil if target.nil? || root.nil? # nothing to do if there is no target or root to begin the search
  queue = Queue.new
  queue.enq(root)
  result = nil
  while !queue.empty?
    value = queue.deq
    p value[:value]
    if value[:value] == target
      result = value
      break
    end

    # keep moving the levels in tree by pushing left and right nodes of tree in queue
    queue.enq(value[:left]) if value[:left]
    queue.enq(value[:right]) if value[:right]
  end

  result # returns node found in BST else default value nil
end

def dfs(root, target)
  p root[:value]
  if root[:value] == target
      return root
  end
  left = dfs(root[:left], target) if root[:left]
  right = dfs(root[:right], target) if root[:right]
  left or right
end

tree = {
    "value": 8,
    "left": {
        "value": 3,
        "left": {
            "value": 1,
            "left": nil,
            "right": nil
        },
        "right": {
            "value": 6,
            "left": {
                "value": 4,
                "left": nil,
                "right": nil
            },
            "right": {
                "value": 7,
                "left": nil,
                "right": nil
            }
        }
    },
    "right": {
        "value": 10,
        "left": nil,
        "right": {
            "value": 14,
            "left": {
                "value": 13,
                "left": nil,
                "right": nil
            },
            "right": nil
        }
    }
}
p tree

# t = build_tree([8,3,10,1,6,4,7,14,13])
# p t
# p bfs(t, 13)
p bfs(tree, 13)
p dfs(tree, 13)
