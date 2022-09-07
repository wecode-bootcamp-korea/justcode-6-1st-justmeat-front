import React from 'react';
import './CartList.scss';

function CartList({
  cartListData,
  deleteCartList,
  patchAmountIncrease,
  increaseProductPriceAndAmount,
  decreaseProductPriceAndAmount,
  deleteCartListData,
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
          <div>{cartListData.id}</div>
          <div className="cart-list-img-box">
            <img
              className="cart-list-img"
              src={cartListData.productImgMain}
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
                onClick={e => {
                  decreaseProductPriceAndAmount(e);
                  patchAmountIncrease(e);
                }}
                disabled={!activeMinusBtn()}
              >
                -
              </button>
            </div>
            <div className="amount-status">
              <span>{cartListData.productAmount}</span>
            </div>
            <div className="amount-plus">
              <button
                id={id}
                onClick={e => {
                  increaseProductPriceAndAmount(e);
                  patchAmountIncrease(e);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="cart-list-price">
            <span>{cartListData.paymentAmount}원</span>
          </div>
          <div
            id={id}
            className="cart-list-delete"
            onClick={e => {
              deleteCartList(e);
              deleteCartListData(e);
            }}
          >
            X
          </div>
        </div>
      </section>
    </div>
  );
}
export default CartList;
