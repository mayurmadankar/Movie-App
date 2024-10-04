import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 45px;
  background-color: purple;
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
`;

const Image = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const Count = styled.span`
  background: orange;
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
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
            <Count>3</Count>
          </Container>
        </Nav>
      </>
    );
  }
}
export default Navbar;
