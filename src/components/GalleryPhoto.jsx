import React from "react";

function GalleryPhoto(photo) {
  return (
    <div
      className="gallery-photo"
      style={{
        backgroundImage: `url("/images/gallery/${photo.name}")`,
      }}
    ></div>
  );
}

export default GalleryPhoto;
