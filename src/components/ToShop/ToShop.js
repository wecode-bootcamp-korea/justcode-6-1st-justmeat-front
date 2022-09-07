import React from 'react';
import { Link } from 'react-router-dom';
import './ToShop.scss';

export default function ToShop() {
  return (
    <div>
      <Link to="/shop">
        <div className="to-shop-wrapper">
          <img
            className="to-shop"
            alt="고기사진"
            src="/images/kyle-mackie-qgfjZUXup1M-unsplash.jpg"
          />
        </div>
      </Link>
    </div>
  );
}
