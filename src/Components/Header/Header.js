import React, { Component } from "react";
import styled from 'styled-components';
import logo from '../../images/header_logo.png';

const styles = {
  backgroundColor: "#519872",
  height: "12vh",
  display: "flex",
  alignItems: "center",
  padding: " 0 20px",
  color: "white"
};

const Logo = styled.div`
    position: absolute;
    left: 300px;
    > img{
        width: 35px;
        padding-top: 17px;
    }
`


class Header extends Component {
  render() {
    return (
      <div className="nav-bar" style={styles}>
        <Logo>
          <img src={logo} alt='' />
        </Logo>
        <h1 style={styles}>Houser</h1>
      </div>
    );
  }
}
export default Header;