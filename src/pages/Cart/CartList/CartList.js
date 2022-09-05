import React from 'react';
import './CartList.scss';

function CartList({
  cartListData,
  deleteCartList,
  increaseProductPriceAndAmount,
  decreaseProductPriceAndAmount,
  id,
}) {
  function activeMinusBtn() {
    if (cartListData.productAmount > 1) {
      return true;
    }
  }

  return (
    <div>
      <section className="cart-list-table">
        <div className="cart-list-container">
          <div className="cart-list-img-box">
            <img
              className="cart-list-img"
              src={cartListData.productImg}
              alt="초신선 무항생제 돼지 삼겹살 구이용"
            ></img>
          </div>
          <div className="cart-list-product-info">
            <p className="cart-list-title">{cartListData.productName}</p>
            <span className="cart-list-product-option">
              {cartListData.width}
            </span>
          </div>
          <div className="cart-list-product-weight">
            <span>{cartListData.weight}g기준</span>
          </div>
          <div className="cart-list-amount-box">
            <div className="amount-minus">
              <button
                id={id}
                onClick={decreaseProductPriceAndAmount}
                disabled={!activeMinusBtn()}
              >
                -
              </button>
            </div>
            <div className="amount-status">
              <span>{cartListData.productAmount}</span>
            </div>
            <div className="amount-plus">
              <button id={id} onClick={increaseProductPriceAndAmount}>
                +
              </button>
            </div>
          </div>
          <div className="cart-list-price">
            <span>{cartListData.paymentAmount}원</span>
          </div>
          <div id={id} className="cart-list-delete" onClick={deleteCartList}>
            X
          </div>
        </div>
      </section>
    </div>
  );
}
export default CartList;
