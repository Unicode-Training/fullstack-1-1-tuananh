### Lấy Authentication Code

GET https://accounts.google.com/o/oauth2/v2/auth

Params:

- client_id: CLIENT ID cua ban
- redirect_uri: Link Callback
- response_type: code
- scope: email profile
- access_type: offline

### Lấy Access Token

POST https://oauth2.googleapis.com/token

Body:

- code: Code lấy từ bước trên
- client_id: CLIENT ID cua ban
- client_secret: SECRET cua ban
- redirect_uri: Link Callback
- grant_type: authorization_code

### Lấy user từ access token

https://www.googleapis.com/oauth2/v1/userinfo?access_token={access_token}
