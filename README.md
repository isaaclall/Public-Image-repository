# Shopify-challenge-2021-fall
My submission for the 2021 fall Shopify backend developer challenge - Building an Image Repository!


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
- Uploading images and a name associated with the image
- Deleted any image that the user owns, by providing image ID
- Listing all the images and their names that the logged in user has stored

We will be using postman to send requests!


**1) To sign up using email and password**

- Send a POST request `http://localhost:5000/auth/signup`
- Dont forget to include your email and password in the body of the request ! (JSON format)
<img src="https://user-images.githubusercontent.com/66037084/116791202-b097a580-aa86-11eb-8f84-7ef174b71175.png" width="700" height="233">


**2) To login using your valid email and password**

- Send a POST request to `http://localhost:5000/auth/login`
- Dont forget to include your email and password in the body of the request ! (JSON format)
<img src = "https://user-images.githubusercontent.com/66037084/116791407-1a647f00-aa88-11eb-8edc-8374acbcd303.png" width = "700" height = "233">
- Then you will receive a JWT token as a response 
<img src = "https://user-images.githubusercontent.com/66037084/116791432-539cef00-aa88-11eb-98e0-d90d00c8cda7.png" width = "700" height = "233">
- Save this token as you will need it to access all the main features of the application!

**3) To upload an image from your computer**

- Send a POST request to `http://localhost:5000/user`
- Upload your image and name it in the request body
<img src = "https://user-images.githubusercontent.com/66037084/116791647-c9ee2100-aa89-11eb-9891-bc5507a372f7.png" width = "700" height = "333">
- Include your jwt token in the request header with a key named 'Authorization' and the keyword 'Bearer' before the token
<img src = "https://user-images.githubusercontent.com/66037084/116791659-edb16700-aa89-11eb-939e-fa6399518da3.png" width = "700" height = "333">
- If your request is successful you will get the following message
<img src = "https://user-images.githubusercontent.com/66037084/116791743-631d3780-aa8a-11eb-8944-288a61359338.png" width = "700" height = "278">

**4) To get a specific image for the logged in user**
- Send a GET request to 'http://localhost:5000/user/?id='yourimageid' with your JWT token in the header and your public image id 
<img src = "https://user-images.githubusercontent.com/66037084/116793170-0e31ef00-aa93-11eb-8b06-8b8c24e02a72.png" width = "700" height = "278">
- If the request is successful you will this information about your image
<img src = "https://user-images.githubusercontent.com/66037084/116793227-826c9280-aa93-11eb-87bb-06c21f8f5be9.png" width = "750" height = "200">

**5) To get all images for the logged in user**
- Send a GET request to 'http://localhost:5000/user/ with your JWT token in the header but no image id
<img src = "https://user-images.githubusercontent.com/66037084/116793295-f9099000-aa93-11eb-911d-0f3537d78e68.png" width = "700" height = "278">
- If the request is successful you will get a result with all your images and information pertaining to it
<img src = "https://user-images.githubusercontent.com/66037084/116793341-44bc3980-aa94-11eb-9132-a3d795e8320d.png" width = "700" height = "278">

**6) To delete an image for the logged in user**
- Send a DELETE request to 'http://localhost:5000/user/ with your JWT token in the header and the public image id
<img src = "https://user-images.githubusercontent.com/66037084/116793543-5ce08880-aa95-11eb-8d58-812e137361b4.png" width = "700" height = "233">
- If the request is successful you will get "Imaged Deleted"
<img src = "https://user-images.githubusercontent.com/66037084/116793568-7c77b100-aa95-11eb-9bbb-2374c5cb4c12.png" width = "700" height = "233">



# Testing
The project uses Mocha and Chai to test the API endpoints
The tests can be found under the `test` directory, with two separate files for `/user` and `/auth`  
Run the tests using `npm run test`

<img src = "https://user-images.githubusercontent.com/66037084/117366927-76b40e00-ae8f-11eb-91a8-eba7e184b13e.png" width = "700" height = "350">


# Scaling and Next Steps
- Add validation to login and sign up information
- Add more tests for 100% code coverage
- Allow uploading of multiple images at once
- Send more descriptive messages as results
- Containerize project using Docker
