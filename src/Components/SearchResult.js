import React from "react";
import "./SearchResult.css";

class SearchResult extends React.Component {
  toggleSelectedImage = (e) => {
    let newGalleryImages = [];
    if (e.target.classList.contains("selected")) {
      // remove from gallery
      e.target.classList.remove("selected");
      newGalleryImages = this.props.galleryImages.filter(
        (image) => image !== e.target.src
      );
    } else {
      // Add to gallery
      newGalleryImages = [...this.props.galleryImages, e.target.src];
      e.target.classList.add("selected");
    }

    this.props.setGalleryImages(newGalleryImages);
  };

  render() {
    return (
      <div style={style}>
        {this.props.images.map((image) => {
          // https://farm66.staticflickr.com/65535/50351909646_92c613b432_m.jpg
          const imageSrc = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
          return (
            <img
              className="SearchResultImage"
              onClick={this.toggleSelectedImage}
              key={image.id}
              src={imageSrc}
              alt={image.title}
            ></img>
          );
        })}
      </div>
    );
  }
}
const style = {
  height: "100%",
  display: "grid",
  background: "lightgrey",
  gridTemplateColumns: "repeat(4, 1fr)",
};
export default SearchResult;
