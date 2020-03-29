json.extract! email, :id, :content, :, :citizen_id, :sender_id, :citizen_active, :receiver_active, :created_at, :updated_at
json.url email_url(email, format: :json)
