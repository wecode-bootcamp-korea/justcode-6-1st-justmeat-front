import './ImageSlider.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ImageSlider() {
  // const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(0px)`,
    transition: `all 0.4s ease-in-out`,
  });
  const moveImg = () => {
    // setCurrentImgIndex(currentImgIndex + 1);
    setStyle({
      transform: `translateX(-2160px)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  return (
    <div className="image-slider-container">
      <img
        onClick={moveImg}
        style={style}
        src="/images/main-img-logo.png"
      ></img>

      <img onClick={moveImg} style={style} src="/images/main-pork.png"></img>
    </div>
  );
}
export default ImageSlider;
