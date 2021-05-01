# Shopify-challenge-2021-fall
My submission for 2021 fall shopify backend developer challenge - Building an Image Respository!


## Contents
  - [Setting up](#setting-up)
  - [Features and user walkthrough](#features )
  - [Tests](#testing)
  - [Scaling](#next-steps)


# Setting up

To set up on your system you will need to have:

```
    - Node.js
    - MongoDB Atlas free account
    - Cloudinary free developer Account
```

In order to run the code on your system: 
1. Run `git clone https://github.com/isaaclall/shopify-challenge-fall.git`  
2. `cd` into the project repository  
3. Run `npm install` to install all the required dependencies
4. Run `npm start` to run the server - The server will start listening on `http://localhost:5000/`

To host your own server and run the files you will need to go into the .env file and put in the following information

```
  MONGO_URI : "Your Mongo Atlas account"
  CLOUDINARY_API_KEY: "Your cloudinary api key",
  CLOUDINARY_API_SECRET: "Your cloudinary api secret key",
  CLOUDINARY_CLOUD_NAME: "Your cloudinary cloud name",
  JWT_KEY = "secret"
  
  }
```











