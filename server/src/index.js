const express = require('express');
const firebase = require('firebase');
const { routerMovie } = require('./routers/movie.router');

const app = express();

// @ts-ignore
firebase.initializeApp({
  apiKey: 'AIzaSyD0hddtCFWWHAoj13FP0kcd1JYlZEZZW2k',
  authDomain: 'moviestore-f04be.firebaseapp.com',
  projectId: 'moviestore-f04be',
  storageBucket: 'moviestore-f04be.appspot.com',
  messagingSenderId: '187557655089',
  appId: '1:187557655089:web:d3f6b5da0aaeb703ca1b10',
  measurementId: 'G-D1PEE0W48N',
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    return res.status(200).json({});
  }
  next();
  return {};
});

app.use('/', routerMovie);

app.listen(8080, () => console.log('Server running on port 8080'));
