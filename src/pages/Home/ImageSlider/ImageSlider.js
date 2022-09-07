import './ImageSlider.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ImageSlider() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(-${currentImgIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });
  const moveImg = () => {
    setCurrentImgIndex(currentImgIndex + 1);
    setStyle({
      transform: `translateX(-${currentImgIndex + 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  return (
    <div className="image-slider-container">
      <img onClick={moveImg} style={style} src="/images/main-image-3.png"></img>

      <img onClick={moveImg} style={style} src="/images/main-pork.png"></img>
    </div>
  );
}
export default ImageSlider;
