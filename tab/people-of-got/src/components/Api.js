import React, { Component } from "react";

class App extends Component {
  state = {
    houses: []
  };

  componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json";

    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          data: data.houses
        });
      });
  }

  render() {
    const { houses } = this.state;
    const result = houses.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });
    return <ul>{result}</ul>;
  }
}

export default App;
