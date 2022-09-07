import React, { useState, useEffect } from 'react';
import Items from './Items/Items';
import './ItemList.scss';

const ItemList = props => {
  const { data } = props;
  return (
    <div>
      <div className="item-list setting-center">
        <div className="item-flex">
          {data &&
            data.map((item, index) => (
              <Items
                key={index}
                id={item.id}
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
