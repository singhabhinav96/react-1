import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      active: "Starks"
    };
  }

  componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json";

    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          houses: data.houses
        });
      });
  }

  render() {
    if (!this.state.houses) return "";
  }
}

export default App;
