import React from "react";
import "../css/App.scss";
import SimpleReactLightbox from "simple-react-lightbox";
import GiphyContainer from "./GiphyContainer";
import SearchContainer from "./SearchContainer";
import ErrorContainer from "./ErrorContainer";
import UrlErrorContainer from "./UrlErrorContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giphies: [],
      value: "",
      searchError: false,
      urlError: false
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData(value) {
    let url = "";
    const accessKey = `${process.env.REACT_APP_API_KEY}`;

    if (value) {
      url = `https://api.giphy.com/v1/gifs/search?api_key=${accessKey}&q=${value}&limit=30&offset=0&rating=g&lang=en`;
    } else {
      url = `https://api.giphy.com/v1/gifs/trending?api_key=${accessKey}&limit=30&rating=g`;
    }

    try {
      const response = await fetch(url, {
        method: "get"
      });
      const data = await response.json();
      const giphies = data.data;
      
      if (giphies.length > 0) {
        this.setState({
          giphies: giphies,
          value: value,
          searchError: false
        });
      } else {
        this.setState({
          giphies: [],
          searchError: true
        });
      }
    } catch (error) {
      this.setState({
        urlError: true
      });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="app">
        
          <SearchContainer
            handleSearch={this.fetchData}
          ></SearchContainer>
          {this.state.searchError ? (
            <ErrorContainer></ErrorContainer>
          ) : this.state.urlError ? (
            <UrlErrorContainer></UrlErrorContainer>
          ) : (
            <SimpleReactLightbox>
            <GiphyContainer
              giphies={this.state.giphies}
              value={this.state.value}
            ></GiphyContainer>
            </SimpleReactLightbox>
        )}
        
      </div>
    );
  }
}

export default App;
