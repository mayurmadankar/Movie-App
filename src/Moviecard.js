import { Component } from "react";

class MovieCard extends Component {
  removeStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState({
      stars: this.state.stars - 0.5
    });
  };

  addStars = () => {
    if (this.state.stars >= 5) {
      return;
    }

    this.setState((prevState) => ({
      stars: prevState.stars + 0.5
    }));
  };

  toggleFavourite = () => {
    this.setState((prevState) => ({
      fav: !prevState.fav
    }));
  };

  toggleCart = () => {
    this.setState((prevState) => ({
      cart: !prevState.cart
    }));
  };
  render() {
    const { title, plot, price, rating, stars, fav, cart } = this.props.movies;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"
            />
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
                  onClick={this.removeStars}
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
                  onClick={this.addStars}
                />
                <span className="starCount">{stars}</span>
              </div>

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.toggleFavourite}
              >
                {fav ? "Un-Favourite" : "Favourite"}
              </button>

              <button
                className={cart ? "remove-btn" : "cart-btn"}
                onClick={this.toggleCart}
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
