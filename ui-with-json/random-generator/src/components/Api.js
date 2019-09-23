import React, { Component } from "react";
import "../api.css";

export class Api extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      loader: true
    };
  }

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(result => result.json())
      .then(data => this.setState({ imageUrl: data[0].url, loader: false }));
  }

  handleClick = () => {
    this.setState({ loader: true });
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(result => result.json())
      .then(data => this.setState({ imageUrl: data[0].url, loader: false }));
  };

  render() {
    return (
      <>
        <div className="image-container">
          {!this.state.loader ? (
            <img
              src={this.state.imageUrl}
              width="700px"
              height="400px"
              alt="catImage"
            ></img>
          ) : (
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        <button onClick={() => this.handleClick()}>cat</button>
      </>
    );
  }
}

export default Api;
