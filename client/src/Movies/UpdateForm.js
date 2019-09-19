import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
  title: '',
  director: '',
  metascore: '',
  stars: '',
};

const UpdateForm = props => {
  const [movie, setMovie] = useState(initialMovie);

  const { match, movies } = props;
  useEffect(() => {
    const id = match.params.id;
    const movieToUpdate = movies.find(item => `${item.id}` === id);
    if (movieToUpdate) {
      console.log(movieToUpdate);
      setMovie(movieToUpdate);
    }
  }, [match, movies]);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    setMovie({
      ...movie,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        props.updateMovies(res.data);
        props.history.push(`/movies/${movie.id}`);
        setMovie(initialMovie);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={movie.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={movie.director}
        />
        <div className="baseline" />

        <input
          type="number"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
          value={movie.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={movie.stars}
        />
        <div className="baseline" />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
  