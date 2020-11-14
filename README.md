# Socialize
Build using ReactJs, Node.js, MySQL.
A simple app list users and friend and mutual friends.

## How to run server and migrate database

```
cd server
touch .env
copy .env.example to .env and change database credentails
npm install
npx sequelize db:migrate
npx sequelize db:seed:all
npm start
```
# API endpoints
Import Postman enviroment from envCodemymobile.json and API collection codemymobile.postman_collection.json .

> Retreive list of Users :  GET Method  http://{{url}}/api/v1/users?page={{page}}&limit={{limit}}

> Retreive list of User friends : GET Method  http://{{url}}/api/v1/users/{{userId}}?page={{page}}&limit={{limit}}

> Retrieve list of user one and user two mutual friends : GET Method  http://{{url}}/api/v1/users/userId/{{user2Id}}?page={{page}}&limit={{limit}}

## How to run Client (React application)
```
cd client
npm run dev
```
App would start on localhost:3000
