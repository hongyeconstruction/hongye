import React from "react";

function GalleryPhoto(photo) {
  return (
    <div
      className="gallery-photo"
      style={{
        backgroundImage: `url(${photo.src})`,
      }}
    ></div>
  );
}

export default GalleryPhoto;
