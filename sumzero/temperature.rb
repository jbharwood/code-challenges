require 'pry'

class TemperatureTracker

  def initialize
    @temperatures = []
  end

  def insert(temp)
    @temperatures << temp
  end

  def getMax
    @temperatures.max
  end

  def getMin
    @temperatures.min
  end

  def getMean
    sum = 0
    @temperatures.each do |t|
      sum += t
    end
    mean = sum/@temperatures.length.to_f
  end

  def getMode
    hash = {}
    @temperatures.each do |t|
      if hash[t].nil?
        hash[t] = 1
      else
        hash[t] += 1
      end
    end
    sorted = hash.sort_by do |k,v|
      v
    end
    sorted.last[0]
  end

  def isEligible?(citizenID)
    sentEmails = Email.connection.select_all("
        SELECT COUNT(id) AS number_of_emails, SUM(LEN(content)) AS char_count
        FROM emails
        WHERE sender_id = #{citizenID}
          AND created_at BETWEEN DATEADD(DAY, -7, GETDATE()) AND DATEADD(DAY, 1, GETDATE())
        ORDER BY created_at DESC
        ").to_hash

    if sentEmails.number_of_emails > 5
      return false
    end

    if sentEmails.char_count > 200
      return false
    end

    return true
  end

end

temps = TemperatureTracker.new()
temps.insert(1)
temps.insert(2)
temps.insert(2)
temps.insert(2)
temps.insert(3)
temps.insert(4)
temps.insert(4)
temps.insert(4)
temps.insert(4)
temps.getMean()
temps.getMode()
