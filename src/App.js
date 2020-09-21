import React, { useState } from "react";
import SearchField from "./Components/SearchField";
import SearchResult from "./Components/SearchResult";
import Gallery from "./Components/Gallery/Gallery";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  return (
    <div className="App">
      <Gallery images={galleryImages} setGalleryImages={setGalleryImages} />
      <SearchField setImages={setImages} />
      <SearchResult
        images={images}
        setGalleryImages={setGalleryImages}
        galleryImages={galleryImages}
      />
    </div>
  );
}

export default App;
