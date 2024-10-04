import { Component } from "react";
import MovieCard from "./Moviecard.js";
import { movies } from "./moviedata.js";

class MovieList extends Component {
  render() {
    const { movies, addStars, removeStars, favToggle, cartToggle } = this.props;
    return (
      <div>
        {movies.map((movie, index) => (
          <MovieCard
            movies={movie}
            key={index}
            addStars={addStars}
            removeStars={removeStars}
            favToggle={favToggle}
            cartToggle={cartToggle}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
