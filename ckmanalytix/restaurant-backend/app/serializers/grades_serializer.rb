class GradeSerializer < ActiveModel::Serializer
  attributes :id, :dba, :boro, :building, :street, :zipcode, :cuisine_description,
    :violation_description, :critical_flag, :score, :grade, :grade_date,
    :record_date

  # def critical_flag
  #   object.critical_flag
  # end

end
