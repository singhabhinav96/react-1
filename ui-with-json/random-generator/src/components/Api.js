import React, { Component } from "react";

export class Api extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: ""
    };
  }

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(result => {
        return result.json();
      })
      .then(data => {
        let catUrl = data;
        this.setState({
          imageUrl: catUrl[0].imageUrl
        });
      });
  }

  handleclick = () => {
    this.setState({
      imageUrl: ""
    });
    this.componentDidMount();
  };
  render() {
    return (
      <div>
        <div>{this.state.images}</div>
      </div>
    );
  }
}

export default Api;
