import { Component } from "react";

class MovieCard extends Component {
  render() {
    const { movies, addStars, removeStars, favToggle, cartToggle } = this.props;
    const { title, plot, price, poster, rating, star, fav, cart } =
      this.props.movies;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={poster} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/10905/10905142.png"
                  onClick={() => {
                    removeStars(movies);
                  }}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  alt="increase"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span className="starCount">{star}</span>
              </div>

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  favToggle(movies);
                }}
              >
                {fav ? "Un-Favourite" : "Favourite"}
              </button>

              <button
                className={cart ? "remove-btn" : "cart-btn"}
                onClick={() => {
                  cartToggle(movies);
                }}
              >
                {cart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
