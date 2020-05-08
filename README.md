# club-manager
A management application for local DSC chapters to monitor their members, their roles and details. It aim at reducing the stress of manual documentation as you can add, delete and view any member details anytime, anywhere in your mobile phone or laptop. This web application is built with ReactJS on the frontend and implemented Google's firebase Backend as a Service (BaaS) for its authentication, authorization and backend as a whole.

## Getting Started
- Clone this repository and change directory into the clone repo
```git
    git clone https://github.com/Adiomojeed/clubmanager.git && cd clubmanager
```
- After cloning, install all NPM dependencies
```npm
    npm install
```
- To connect the application to firebase, create a firebase project on [firebase console](https://console.firebase.google.com), and copy your firebase sdk into the `.env` file
```npm
    cp .env.example .env
```
- Run the development server and view your application on localhost:3000
```npm
    npm run dev
```
> Proceed to your firebase console dashboard to view authenticated users and their interaction with the database
