import React from "react";
import '../styles/ImageOverlay.css'

interface ImageOverlayProps {
  img: string;
  alt: string;
  handleOverlayClose: Function;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  // provide entire image path (including require())
  img,
  alt,
  handleOverlayClose,
}) => {
  return (
    <>
      <div className="img-overlay-container">
        <img
          className="img-overlay-img"
          src={img}
          alt={alt}
          title="Click anywhere to close"
          onClick={() => {
            handleOverlayClose();
          }}
        />
      </div>
    </>
  );
};

export default ImageOverlay;
