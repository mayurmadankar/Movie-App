import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: 70,
            backgroundColor: "aquamarine",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div className="title">Movie App</div>
          <div>
            <img alt="cart icon" />
            <span>3</span>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
