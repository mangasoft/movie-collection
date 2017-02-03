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
To get the frontend app running, navigate to the `client` directory and run:
```
npm install
npm start
```

