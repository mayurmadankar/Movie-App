import { Component } from "react";
import MovieList from "./MovieList.js";
// import Student from "./Student.js";
import Navbar from "./navbar.js";
import { movies } from "./moviedata.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0
    };
  }
  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star >= 5) {
      return;
    }
    movies[mid].star += 0.5;
    this.setState({
      movies: movies
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({
      movies: movies
    });
  };
  toggleFavourite = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies: movies
    });
  };

  toggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    // console.log(movies[mid].cart);
    if (movies[mid].cart) {
      cartCount = cartCount + 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies,
      cartCount
    });
    console.log(cartCount);
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          removeStars={this.handleDecStar}
          favToggle={this.toggleFavourite}
          cartToggle={this.toggleCart}
        />
      </>
    );
  }
}
export default App;
