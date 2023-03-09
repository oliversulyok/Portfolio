import {useState} from 'react';

export const usePictureRotator = (image_array) => {
    const [visible_image , setVisibleImage] = useState(0);
    const handleNextImage = () => {
        if (visible_image < image_array.length - 1) {
            setVisibleImage(visible_image => visible_image + 1);
        }
    }
    const handlePrevImage = () => {
        if (visible_image > 0) {
            setVisibleImage(visible_image => visible_image - 1);
        }
    }
    return {
        visible_image,
        handleNextImage,
        handlePrevImage
    }
    };