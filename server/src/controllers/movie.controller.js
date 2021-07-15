const firebase = require('firebase');

const getMovies = async (request, response) => {
  const db = firebase.firestore();
  const snapshot = await db.collection('movies').get();
  return response.status(200).json(snapshot.docs.map((doc) => doc.data()));
};

module.exports = { getMovies };
