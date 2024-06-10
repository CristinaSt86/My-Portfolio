// import React, { useState } from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import Image from "../Image/Image";
// import css from "../../FigoRest/FigoRest.module.css";

// export const LightboxGallery = ({ images }) => {
//   // console.log("Rendering LightboxGallery with images:", images.length);
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   //console.log("Index:", photoIndex, "Image Src:", images[photoIndex]);

// const galleryImages = images.map((imgSrc)=>({
//   original: imgSrc,
//   thumbnail: imgSrc
// }))


//   const handleImageClick = (index) => {
//     //console.log("Clicked image index:", index);
//     setPhotoIndex(index);
//     setIsOpen(true);
//   };

//   return (
//     <div className={css.galleryContainer}>
//       {images.map((image, index) => (
//         <Image
//           key={index}
//           src={image}
//           alt={`Galerry Image ${index + 1}`}
//           className={css.imagine}
//           onClick={() => handleImageClick(index)}
//         />
//       ))}

//       {isOpen && (
//      <ImageGallery
//      items={galleryImages}
//      startIndex={photoIndex}
//      onClose={() => {
//        console.log("Closing lightbox");
//        setIsOpen(false);
//      }}
//      onSlide={(currentIndex) => setPhotoIndex(currentIndex)}
//      infinite={true}
//      showPlayButton={false}
//      showFullscreenButton={false}
//    />
//       )}
//     </div>
//   );
// };
import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "../Image/Image";
import css from "../../FigoRest/FigoRest.module.css";

export const LightboxGallery = ({ images }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const galleryImages = images.map((imgSrc) => ({
        original: imgSrc,
        thumbnail: imgSrc  // Assuming you use the same images for thumbnails
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
                <><button onClick={() => setIsOpen(false)}>Close</button><ImageGallery
            items={galleryImages}
            startIndex={photoIndex}
            showThumbnails={true}
            onSlide={(currentIndex) => setPhotoIndex(currentIndex)}
            infinite={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={true}
            showBullets={true} /></>
            )}
        </div>
    );
};
