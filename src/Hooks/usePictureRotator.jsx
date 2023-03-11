/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export const usePictureRotator = (imageArray) => {
  const [visibleImage, setVisibleImage] = useState(0);
  const handleNextImage = () => {
    if (visibleImage < imageArray.length - 1) {
      setVisibleImage((currImage) => currImage + 1);
    }
  };
  const handlePrevImage = () => {
    if (visibleImage > 0) {
      setVisibleImage((currImage) => currImage - 1);
    }
  };
  return {
    visible_image: visibleImage,
    handleNextImage,
    handlePrevImage,
  };
};
