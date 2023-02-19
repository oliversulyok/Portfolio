import React,  {useState, useEffect}  from "react";
import { usePictureRotator } from '../../Hooks/usePictureRotator';

export const ImageDrawer = () => {
    const [image_array, updateImageArray] = useState(new Array);
    const new_items = [1,2,3,4,5]

    useEffect(() => {
        new_items.map(item => (updateImageArray(image_array => {
            console.log(item);
            return [...image_array,item]
            })));
      }, []);
    const { visible_image, handleNextImage, handlePrevImage  } = usePictureRotator(image_array);
    // <img src={require('/images/image-name.png')} />
    return (
        <div>
            {image_array[visible_image]}
            <button onClick={handleNextImage}>nextImage</button>
            <button onClick={handlePrevImage}>prevImage</button>
        </div>
    )
}