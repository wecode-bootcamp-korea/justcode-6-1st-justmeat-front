import React from 'react';
import BestItems from '../../components/BestItems/BestItems';
import css from './Home.scss';
import Coupon from './Coupon/Coupon';
import ImageSlider from './ImageSlider/ImageSlider';

function Home() {
  return (
    <div className={css.container}>
      <ImageSlider />
      <Coupon />
      <BestItems />
    </div>
  );
}

export default Home;
