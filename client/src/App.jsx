import './App.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getMovies from './store/actions/movieAction';
import Movie from './components/movie.component';
import Loader from './components/loader.component';

function App() {
  const dispatch = useDispatch();
  const usersListData = useSelector((state) => state.movies);
  const { movies, loading } = usersListData;
  const [searchQuery, setSearchQuery] = useState('');

  const filterMovies = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };

  const filteredMovies = filterMovies(movies, searchQuery);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <div className="search">
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          className="field"
          placeholder="Search blog posts"
        />
      </div>
      <div className="movies">
        {loading ? (
          <Loader />
        ) : (
          filteredMovies.map((u) => <Movie movie={u} />)
        )}
      </div>
    </>
  );
}

export default App;
