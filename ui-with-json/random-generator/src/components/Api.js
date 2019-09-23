import React, { Component } from "react";

export class Api extends Component {
  constructor() {
    super();
    this.state = {
      result: []
    };
  }

  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(result => {
        return result.json();
      })
      .then(data => {
        let images = this.data.result.map(pic => {
          return (
            <div key={pic.result}>
              <img src={pic.images.cat} alt=""></img>
            </div>
          );
        });
        this.setState({ images: images });
        console.log(this.state.images);
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.images}</div>
      </div>
    );
  }
}

export default Api;
