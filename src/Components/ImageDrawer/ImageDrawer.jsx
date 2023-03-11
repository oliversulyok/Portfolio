import React, { useState, useEffect } from 'react';
import { usePictureRotator } from '../../Hooks/usePictureRotator';

export default function ImageDrawer() {
  // https://blog.logrocket.com/progressive-image-loading-react-tutorial/

  const [imageArray, updateImageArray] = useState([]);
  const newItems = [1, 2, 3, 4, 5];

  useEffect(() => {
    newItems.map((item) => (updateImageArray((array) => [...array, item])));
  }, []);
  const {
    visible_image: visibleImage,
    handleNextImage,
    handlePrevImage,
  } = usePictureRotator(imageArray);
  // <img src={require('/images/image-name.png')} />
  return (
    <div>
      {imageArray[visibleImage]}
      <button onClick={handleNextImage} type="button">nextImage</button>
      <button onClick={handlePrevImage} type="button">prevImage</button>
    </div>
  );
}
