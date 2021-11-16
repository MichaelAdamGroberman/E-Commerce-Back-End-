# E-Commerce-Using-MYSQL

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This project requires us to build the back end of an e-commerce site by modifying the starter code. To do this, I completed the models files by defining the schemas column data types, connected the front end to a back end mysql server, and defined our api(s) routes and methods.

## Installation

To install this application, you must first have [NodeJS](https://nodejs.org/en/) and [MySQL](https://www.mysql.com) installed locally on your computer. You must also have an application to test REST API calls, such as [Insomnia](https://insomnia.rest), or [PostMan](https://www.postman.com)

1. Download or clone repository
2. `npm install` to install the required npm packages
3. run `mysql -u user -p password` and replace user/password with your mysql credentials.
4. run `source db/schema.sql`
5. (optional) run `npm run seed` to propigate the database with dummy data

## Running and Testing the Application

1. `npm start` to start the application. This will run server.js, which starts the back end and our api routes.
2. You can send REST PUT/GET/PUSH/DELTE calls to the application served on your local host.

## Video Walkthroughs
![VIDEO: STARTING APPLICATION](./_assets_/VideoWalkthrough.mov)
[VIDEO: API CALLS](./_assets_/REST_API_calls.mov)
