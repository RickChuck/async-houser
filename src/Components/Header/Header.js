import React, { Component } from "react";

const styles = {
  backgroundColor: "#519872",
  height: "10vh",
  display: "flex",
  alignItems: "center",
  padding: " 0 20px",
  color: "white"
};

class Header extends Component {
  render() {
    return (
      <div className="nav-bar" style={styles}>
        <h1 style={styles}>Houser</h1>
      </div>
    );
  }
}
export default Header;