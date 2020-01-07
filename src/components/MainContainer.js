import React from "react";
import data from "../data/giphy";
import Preview from "./Preview";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e);
  }

  render() {
    const allGiphies = data.map(el => {
      return (
        <div className="indvImg" key={el.id}>
          <img
            onClick={this.handleClick}
            className="giphy-img"
            src={el.images.fixed_height.url}
            alt={el.title}
          />
        </div>
      );
    });

    return <div className="main-container">{allGiphies}</div>;
  }
}

export default MainContainer;
