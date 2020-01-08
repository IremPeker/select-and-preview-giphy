import React from "react";
import "../css/App.scss";
import data from "../data/giphy";
import Preview from "./Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: data[0].images.original.url,
      alt: data[0].images.original.title
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      selected: e.currentTarget.children[0].src,
      alt: e.currentTarget.children[0].title
    });
  }

  render() {
    const allGiphies = data.map(el => {
      return (
        <div className="eachImg" key={el.id} onClick={this.handleChange}>
          <img
            className="giphy-img"
            src={el.images.original.url}
            alt={el.images.original.title}
          />
        </div>
      );
    });
    return (
      <div className="app">
        <div className="main-container">{allGiphies}</div>
        <Preview data={this.state.selected}></Preview>
      </div>
    );
  }
}

export default App;
