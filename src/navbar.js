import { Component } from "react";
import styles from "./nav.module.css";
class Navbar extends Component {
  render() {
    const { cartCount } = this.props;
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>Movie App</div>
          <div className={styles.container}>
            <img
              alt="cart icon"
              src="https://cdn-icons-png.flaticon.com/128/3171/3171927.png"
              className={styles.image}
            />
            <span className={styles.count}>{cartCount}</span>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
