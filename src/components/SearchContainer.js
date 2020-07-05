import React from "react";

class GiphyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "", warning: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      warning: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value.length > 2) {
      this.props.handleSearch(this.state.value);
      this.setState({ value: "" });
    } else {
      this.setState({ warning: true });
    }
  }

  render() {
    return (
      <div className="search-container">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label className="input">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </label>
          <input className="search-button" type="submit" value="Search" />
        </form>
        <p className="explanation">Click On An Image To See The Giphy!</p>
        {this.state.warning && (
          <small>Keyword must be at least 3 characters!</small>
        )}
      </div>
    );
  }
}

export default GiphyContainer;