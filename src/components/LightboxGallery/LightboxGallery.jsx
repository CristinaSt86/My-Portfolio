import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "../Image/Image";
import css from "../../FigoRest/FigoRest.module.css";
import x from "../../images/x.png";

export const LightboxGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = images.map((imgSrc) => ({
    original: imgSrc,
    thumbnail: imgSrc,
  }));

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      {!isOpen && (
        <div className={css.galleryContainer}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className={css.imagine}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      )}

      {isOpen && (
        <>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              borderRadius: "50%",
              border: "1px solid #374957",
              aspectRatio: "1",
              // marginBottom: "0.2rem"
            }}
          >
            <img src={x} className={css.btnImg} alt="exit" />
          </button>
          <ImageGallery
            items={galleryImages}
            startIndex={photoIndex}
            showThumbnails={true}
            onSlide={(currentIndex) => setPhotoIndex(currentIndex)}
            infinite={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={false}
            showBullets={true}
          />
        </>
      )}
    </div>
  );
};
