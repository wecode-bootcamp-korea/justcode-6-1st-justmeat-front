import React from 'react';
import BestItemList from '../../components/List/BestItemList'
import css from './Home.module.scss';

function Home() {
  return (
    <div className={css.container}>
      <BestItemList />
    </div>
  )
}

export default Home;
