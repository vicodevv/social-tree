# SOCIAL TREE API
This API allows you to share multiple social media links. It is built with NodeJS, Express, and MongoDB. It uses JWT for authentication. It is a REST API that supports CRUD operations. It is hosted on Render. You can check it out [here](https://social-tree-api.onrender.com)
## Technologies
This API was developed with the following technologies:
- NodeJS
- Express
- Typescript
- MongoDB
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

## Live Link
https://social-tree-api.onrender.com

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file
- PORT=your port number
- MONGO_URI=your mongodb uri
- JWT_SECRET=your jwt secret

## API Reference

| Method | Description    | Endpoints  |
| :-------- | :------- | :-------------- |
| POST | Login a user | /api/auth/login |
| POST | Register a user | /api/auth/register |
| GET | Get all users | /api/users |
| GET | Get a single user | /api/users/:id |
| POST | Create a user | /api/users |
| GET | Get all links | /api/links |
| GET | Get a single link | /api/links/:id |
| GET | Get all links by a user | /api/links/user/:id |
| POST | Create a link | /api/links/create |
| PUT | Update a link | /api/links/update/:id |
| DELETE | Delete a link | /api/links/delete/:id |



## Authors

- [@vicodevv](https://www.github.com/vicodevv)

## License

[MIT](https://choosealicense.com/licenses/mit/)

