import React, { useState, useEffect } from 'react';
import Items from './Items/Items';
import './ItemList.scss';

const ItemList = props => {
  const { data } = props;
  return (
    <div>
      <div className="itemList">
        <div className="itemFlex">
          {data &&
            data.map(item => (
              <Items
                key={item.id}
                img={item.productImgMain}
                name={item.productName}
                price={item.price}
                weight={item.weight}
                antibiotics={item.isAntibioticFree}
                sales={item.salesAmount}
                stock={item.stock}
                category={item.categoryId}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
