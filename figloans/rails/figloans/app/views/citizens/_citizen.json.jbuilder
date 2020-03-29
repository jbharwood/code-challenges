json.extract! citizen, :id, :first_name, :last_name, :username, :address, :created_at, :updated_at
json.url citizen_url(citizen, format: :json)
