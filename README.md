# Socialize
Build using ReactJs, Node.js, MySQL, Nextjs.
A simple app Contact and SMS app

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
API Server would start at 4000 
# API endpoints

> Retreive list of Contacts :  GET Method  http://{{url}}/api/v1/users?page={{page}}&limit={{limit}}

> Retreive profile of User : GET Method  http://{{url}}/api/v1/users/{{userId}}?page={{page}}&limit={{limit}}

> Retrieve OTP: GET Method  http://{{url}}/api/v1/users/userId/{{smsId}}

> Send OTP: POST Method  http://{{url}}/api/v1/users/{{userId}}/{{smsId}}

## How to run Client (React application)
```
cd client
npm run dev
```
App would start on localhost:3000
