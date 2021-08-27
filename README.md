# Login-Rest-API
This is a Login and Register Rest-API :gear:. Using the JWT have a admin route that check if the user have the admin is  activated and the JWT code and secret.

# Dependencies

Here have all the dependencies that you need to use it...
-

```bash
  $ npm install @hapi/joi
  --------------------------
  $ npm install bcryptjs
  --------------------------
  $ npm install dotenv
  --------------------------
  $ npm install express
  --------------------------
  $ npm install jsonwebtoken
  --------------------------
  $ npm install mongoose
```

# Observation
  Change the file( .env_sample) to .env, and complete using your own data.
  And before save the password the Api will check if the lenght is more than 6 after this will encrypt the password on data bas.
-
