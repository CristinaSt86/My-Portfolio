import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "../components/Image/Image";
import css from "./FigoRest.module.css";

export const LightboxGallery = ({ images }) => {
  console.log("Rendering LightboxGallery with images:", images.length);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  console.log("Index:", photoIndex, "Image Src:", images[photoIndex]);

  const handleImageClick = (index) => {
    console.log("Clicked image index:", index); 
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className={css.galleryContainer}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Galerry Image ${index + 1}`}
          className={css.imagine}
          onClick={() => handleImageClick(index)}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            console.log("Closing lightbox");
            setIsOpen(false);
          }}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};
