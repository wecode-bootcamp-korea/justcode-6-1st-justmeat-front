import React from 'react';
import BestItems from '../../components/BestItems/BestItems';
import css from './Home.scss';

function Home() {
  return (
    <div className={css.container}>
      <BestItems />
    </div>
  );
}

export default Home;
