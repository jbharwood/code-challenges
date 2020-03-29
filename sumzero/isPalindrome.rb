require 'pry'

# Identify that the string is palindrome or not (A string is said to be a palindrome if the string read from left to right is equal to the string read from right to left.)
# aabac -> not palindrome
# aabaa -> palindrome
# aabab -> not palindrome
# abaaa -> not palindrome
# aa    -> palindrome
# aaab  -> not palindrome

def isPalindrome(string)
  # if x.to_s.reverse == x
  #     return true
  # end
  # return false
    count = {}
    oddCount = 0
    string.each_char.with_index do |value, index|
        if count[string[index]]
            count[string[index]] += 1
        else
            count[string[index]] = 1
        end
    end

    odd = 0
    oddLetter = nil
    count.each do |key, value|
      if value % 2 == 1
        odd += 1
        oddLetter = key
      end
    end

    if odd == 0
        return true
    end
    if string[string.length/2] != oddLetter && odd == 0
      p "hit"
      return false
    end

    if odd > 1
      return false
    else
      return true
    end

end

p isPalindrome("aabac")
p "false ----------------------------"
p isPalindrome("true aabaa")
p "true ----------------------------"
p isPalindrome("false aabab")
p "false ----------------------------"
p isPalindrome("false abaaa")
p "false ----------------------------"
p isPalindrome("true aa")
p "true ----------------------------"
p isPalindrome("false ab")
p "false ----------------------------"
p isPalindrome("false aaab")
p "false ----------------------------"
p isPalindrome("true aaaaaaaaa")
p "true ----------------------------"
p isPalindrome("true daad")
p "true ----------------------------"
p isPalindrome("true daccad")
p "true ----------------------------"

# aabac -> not palindrome
# aabaa -> palindrome
# aabab -> not palindrome
# abaaa -> not palindrome
# aa    -> palindrome
# ab    -> not palindrom
# aaab  -> not palindrome
