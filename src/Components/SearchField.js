import React from "react";

class SearchField extends React.Component {
  state = {
    searchInputText: "",
  };

  fetchImages = () => {
    const flickrSearchURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b54580f369a7eeebecb2004dc429d08f&format=json&nojsoncallback=1&text=${this.state.searchInputText}`;
    console.log(flickrSearchURL);
    fetch(flickrSearchURL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.props.setImages(response.photos.photo);
      });
  };

  render() {
    return (
      <div style={style}>
        <input
          type="text"
          value={this.state.searchInputText}
          onChange={(e) => {
            this.setState({ searchInputText: e.target.value });
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              this.fetchImages();
              this.setState({ searchInputText: "" });
            }
          }}
        ></input>
        <button onClick={this.fetchImages}>Search</button>
        <button>Show gallery</button>
      </div>
    );
  }
}

const style = {
  position: "sticky",
  top: 0,
  display: "flex",
  backgroundColor: "#92bfce",
  padding: "10px 0",
  boxShadow: "0 40px 60px 0 rgba(18, 64, 86, 0.75)",
};

export default SearchField;
