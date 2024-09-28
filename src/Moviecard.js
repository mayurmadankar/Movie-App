import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: " Action Movie",
      price: 199,
      rating: 8.9,
      stars: 0
    };
  }
  removeStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState({
      stars: (this.state.stars -= 0.5)
    });
  };
  addStars = () => {
    if (this.state.stars >= 5) {
      return;
    }
    //form one
    // this.setState({
    //   stars: (this.state.stars += 0.5)
    // });

    // second form
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5
      };
    });

    // this.state.stars += 0.5;
    // console.log("this:", this.state.stars);
  };
  render() {
    const { title, plot, price, rating, stars } = this.state;
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
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
