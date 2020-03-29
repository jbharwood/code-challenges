class Grade < ApplicationRecord
  scope :critical_flags, -> { where critical_flag: 'Critical' }
  scope :brooklyn_critical_flags, -> {
    where(["boro = :boro and critical_flag = :critical_flag",
      { boro: "BROOKLYN", critical_flag: "Critical" }])
  }
  scope :boro, ->(boro_name) {   # No space between "->" and "("
    where(:boro => boro_name)
  }
  scope :boro_critical_flags, ->(boro_name) {   # No space between "->" and "("
    where(["boro = :boro and critical_flag = :critical_flag",
      { boro: boro_name, critical_flag: "Critical" }])
  }
end
