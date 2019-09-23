import React, { Component } from "react";
import "../card.css";

export class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="profile-container">
          <div className="profile"></div>
          <div className="profile-name"></div>
        </div>
        <div className="profile-desc"></div>
      </div>
    );
  }
}

export default Card;
