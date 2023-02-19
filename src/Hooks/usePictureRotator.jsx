import {useState, useRef} from 'react';

export const usePictureRotator = (image_array) => {
    const [visible_image , setVisibleImage] = useState(0);
    const handleNextImage = () => {
        if (visible_image < image_array.length) {
            console.log("click")
            setVisibleImage(visible_image => visible_image + 1);
        }
    }
    const handlePrevImage = () => {
    }
    return {
        visible_image,
        handleNextImage,
        handlePrevImage
    }
    };