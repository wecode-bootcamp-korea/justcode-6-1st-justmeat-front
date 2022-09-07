import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import './Modal.scss';

export default function Modal({ open, onClose, children, name }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style" />
      <div className="modal-style">
        <button className="close-modal" onClick={onClose}>
          X
        </button>
        <h3 className="modal-product-name">{name}</h3>
        {children}
        <div>
          <span className="custom-order-title">옵션선택</span>
          <div className="custom-order-wrapper">
            <select className="custom-order">
              <option value="0">보통 (16mm)</option>
              <option value="1">얇게 (11mm)</option>
              <option value="2">두껍 (24mm)</option>
            </select>
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="buy-now">바로구매</button>
          <Link to="/cart">
            <button className="to-cart">장바구니</button>
          </Link>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
