import React from "react";
import data from "../data/giphy";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: data[0].images.fixed_height.url,
      title: data[0].images.fixed_height.title
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    //console.log(e.currentTarget.src); // this will show the onclick target
    console.log("onclick...");

    this.setState({
      url: e.currentTarget.src,
      title: e.currentTarget.alt
    }); // setState updates the state (here used for parent child communication)
    console.log(
      `clicked on=>`,
      this.setState.url,
      `title is=>`,
      this.setState.title
    );
  }

  render() {
    const allGiphies = data.map(el => {
      return (
        <div className="indvImg" key={el.id}>
          <img
            className="giphy-img"
            onClick={this.handleClick}
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
