import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from './Movies/UpdateForm';

import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([])
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/`, {
        params: {}
      })
      .then(response => {
        const movies= response.data;
        console.log("Movies:", movies);
        setMovies(movies);
      });
  }, []);
  const deleteMovie = movie => {
    // e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/movies/${movie.id}`)
      .then(res => {
        setMovies(movie);
        window.location = "/";
      })
      .catch(err => console.log(err.response));
  }
  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} deleteMovie={deleteMovie}/>;
        }}
      />
    <Route
      path="/update-movie/:id"
      render={props => {
        return <UpdateForm {...props} movies={movies} />}} //change added here
    />
    </>
  );
};

export default App;
