import axios from 'axios';

import GET_MOVIES from '../types';

const getMovies = () => async (dispatch) => {
  const res = await axios.get('http://localhost:8080/movies');
  dispatch({
    type: GET_MOVIES,
    payload: res.data,
  });
};

export default getMovies;
