# Shopify-challenge-2021-fall
My submission for 2021 fall shopify backend developer challenge - Building an Image Respository!


## Contents
  - [Setting up](#setting-up)
  - [Features and user walkthrough](#Features-and-User-Walkthrough)
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

To host your own server and compile the code you will need to go into the .env file and put in the following information

```
  MONGO_URI : "Your Mongo Atlas account"
  CLOUDINARY_API_KEY: "Your cloudinary api key",
  CLOUDINARY_API_SECRET: "Your cloudinary api secret key",
  CLOUDINARY_CLOUD_NAME: "Your cloudinary cloud name",
  JWT_KEY = "secret"

```

# Features and User Walkthrough

This app contains the following features -  
- User Sign up using email and password (hashed then stored in the DB)
- Login and secure routes with JWT auth
- Uploading images and a name assoiciated with the image
- Deleted any image that the user owns, by providing image ID
- Listing all the images and their names that the logged in user has stored

We will be using postman to send requests!


1) To sign up using email and password

- Send a POST request `http://localhost:5000/auth/signup`
- Dont forget to include your email and password in the body of the request ! (JSON format)

![image](https://user-images.githubusercontent.com/66037084/116791202-b097a580-aa86-11eb-8f84-7ef174b71175.png)


2) To login using your valid email and password

3) To upload an image from your computer

4) To get a specific image for the logged in user

5) To get all images for the logged in user

6) To delete an image for the logged in user


# Testing











# Scaling and Next Steps











