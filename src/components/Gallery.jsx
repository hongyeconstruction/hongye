import React from "react";
import GalleryPhoto from "./GalleryPhoto";
import "../styles/Gallery.css";
import gallery from "../gallery";

function createGalleryPhoto(photo) {
  return <GalleryPhoto key={photo.id} name={photo.name} />;
}
function Gallery() {
  return (
    <div id="gallery" className="gallery">
      <div className="gallery-title">Get Inspired by Our Projects</div>
      <div className="gallery-photos">{gallery.map(createGalleryPhoto)}</div>
    </div>
  );
}

export default Gallery;
