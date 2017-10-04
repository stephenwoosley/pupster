import React, { Component } from "react";
import Nav from "./Nav.js";

class Container extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  

  render() {
    return(
      <div>
        <Nav currentPage = {this.state.currentPage} />
      </div>
    );
  }

}

export default Container;
