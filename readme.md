# Movie Collection
This is the root directory of both a front end and backend app.

### Backend
To get the backend started, navigate to the `server` directory and run:
```
npm install
npm start
```

The backend relies on mongodb as it's persistence layer so please ensure to run the mongo daemon. If you have mongo installed run:

```
mongod --dbpath ./data/db
```

### Frontend
Inside the `client` directory, you can run several commands:

  ```
  yarnpkg start
  ```
  Starts the development server.

  ```
  yarnpkg run build
  ```
  Bundles the app into static files for production.

  ```
  yarnpkg test
  ```
  Starts the test runner.

  ```
  yarnpkg run eject
  ```
  Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:
  ```
  cd client
  yarnpkg start
  ```
