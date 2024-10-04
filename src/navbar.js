import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 45px;
  background: linear-gradient(#e66465, #9198e5);
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: "#9198e5";
  }
`;

const Image = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const Count = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  color: black;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <Title>Movie App</Title>
          <Container>
            <Image
              alt="cart icon"
              src="https://cdn-icons-png.flaticon.com/128/3171/3171927.png"
            />
            <Count color="#9198e5" show={true}>
              3
            </Count>
          </Container>
        </Nav>
      </>
    );
  }
}
export default Navbar;
