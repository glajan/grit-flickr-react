import React from "react";

class Gallery extends React.Component {
  state = {
    displayedImageIndex: 0,
  };
  deleteImgGallery = (e) => {
    let imgSrc = document.querySelector(".img-gallery").src;
    let newGalleryImages = this.props.images.filter(
      (image) => image !== imgSrc
    );
    this.props.setGalleryImages(newGalleryImages);
  };

  displayNextImage = () => {
    if (this.state.displayedImageIndex === this.props.images.length - 1) {
      this.setState({ displayedImageIndex: 0 });
    } else {
      this.setState({ displayedImageIndex: ++this.state.displayedImageIndex });
    }
  };

  render() {
    return (
      <div className="Gallery">
        <button onClick={this.deleteImgGallery}>Delete image</button>
        <img
          className="img-gallery"
          alt=""
          src={this.props.images[this.state.displayedImageIndex]}
          onClick={this.displayNextImage}
        ></img>
      </div>
    );
  }
}

export default Gallery;
