# SOCIAL TREE API
This API allows you to share multiple social media links. It is built with NodeJS, Express, MongoDB and Mongoose. It uses JWT for authentication. It is a REST API that supports CRUD operations. It is hosted on Heroku. Read postman documentation for further details

## Technologies
This API was developed with the following technologies:
- NodeJS
- Express
- MongoDB
- Mongoose
- JWT

## Getting Started
Pre-requisites
- Node(LTS version)
- NPM v9.0.0 or higher
- MongoDB

You can get the latest version of NodeJS from [here](https://nodejs.org/en/download/) or you can check the version you have installed on your machine by running the following command in your terminal
```bash
  node -v
```

You can get the latest version of NPM from [here](https://www.npmjs.com/get-npm) or you can check the version you have installed on your machine by running the following command in your terminal
```bash
  npm -v
```

## Installation
Clone the project

```bash
  git clone git@github.com:vicodevv/social-tree.git
```

Go to the project directory

```bash
  cd social-tree
```

Install dependencies

```bash
  npm install
```

Run the code

```bash
  npm run dev
```

## Entity Relationship Diagram
<img src="https://user-images.githubusercontent.com/55485439/236048256-26eadb25-8e5b-4559-9b36-c013f64f3850.png" width=800>

## Authentication
This API uses JWT for authentication. To get a token, you need to register and login. The token is valid for 24 hours. You can use the token to access protected routes. To access authenticated routes, set your authorization header to Bearer [ token ]. Read postman documentation for further details

## Postman Documentation
https://documenter.getpostman.com/view/17026180/2s93eVWZDM


## Authors

- [@vicodevv](https://www.github.com/vicodevv)

## License

[MIT](https://choosealicense.com/licenses/mit/)

