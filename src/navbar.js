import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <div style={styles.nav}>
          <div style={styles.title}>Movie App</div>
          <div style={styles.cartContainer}>
            <img
              alt="cart icon"
              src="https://cdn-icons-png.flaticon.com/128/3171/3171927.png"
              style={styles.cartIcon}
            />
            <span style={styles.cartCount}>3</span>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;

const styles = {
  nav: {
    width: "100%",
    height: 50,
    backgroundColor: "purple",
    display: "flex",
    justifyContent: "space-between",
    alignItem:"center",
    postion:"relative"
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat",sans-serif',
    textTransform: "uppercase",
    marginLeft: 20
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer"
  },
  cartIcon: {
    height: 40,
    marginRight: 20
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12
  }
};
