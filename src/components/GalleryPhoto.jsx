import React from "react";

function GalleryPhoto({ src }) {
  return (
    <div
      className="gallery-photo"
      style={{
        backgroundImage: `url(${src})`,
      }}
    ></div>
  );
}

export default GalleryPhoto;
