import React, {useState} from 'react';
import axios from 'axios';

// const initialMovie = {
//     title: '',
//     director: '',
//     metascore: '',
//     stars: []
//   };

const UpdateForm = (props) => {
    // const [detail, setDetail] = useState();
    // const id = props.match.params.id;
    // const movieInArray = props.updateMovie.find(item => item.id === id)
    // console.log(movieInArray);

//     const { match, movie } = props;
//     useEffect(() => {
//       const id = match.params.id;
//       const movieToUpdate = movie.find(item => `${item.id}` === id);
//       if (movieToUpdate) {
//         console.log(movieToUpdate);
//         setMovie(movieToUpdate);
//       }
//     }, [match, movie]);
  
    // const changeHandler = ev => {
    //   ev.persist();
    //   let value = ev.target.value;
  
    //   setUpdatedMovie({
    //     ...updatedMovie,
    //     [ev.target.name]: value
    //   });
    // };
  
    // const handleSubmit = e => {
    //   e.preventDefault();

    // };
  
    return (
      <div>
        <h2>Update Movie</h2>
        <form >
        {/* onSubmit={handleSubmit */}
          <input
            type="text"
            name="name"
            // onChange={changeHandler}
            placeholder="Title"
            // value={updatedMovie.name}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="director"
            // onChange={changeHandler}
            placeholder="Director"
            // value={updatedMovie.director}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="metascore"
            // onChange={changeHandler}
            placeholder="Metascore"
            // value={updatedMovie.metasore}
          />
          <div className="baseline" />
  
          <input
            type="text"
            name="stars"
            // onChange={changeHandler}
            placeholder="Stars"
            // value={updatedMovie.stars}
          />
          <div className="baseline" />
  
          <button>Update</button>
        </form>
      </div>
    );
  };
  
  export default UpdateForm;
  