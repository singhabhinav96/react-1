import React, { Component } from "react";
import "../api.css";

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
      <>
        <div className="image-container">
          {this.state.imageUrl ? (
            <img src={this.state.imageUrl} alt="catImage"></img>
          ) : (
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        <button onclick={this.handleClick}>cat</button>
      </>
    );
  }
}

export default Api;
