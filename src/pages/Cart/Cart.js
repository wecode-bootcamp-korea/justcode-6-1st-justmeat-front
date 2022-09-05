import CartList from './CartList/CartList';
import './Cart.scss';
import { useEffect, useState } from 'react';
import CartPayment from './CartPayment/CartPayment';

function Cart() {
  const [cartListMockData, setCartListMockData] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  useEffect(() => {
    fetch('/data/CartList.json')
      .then(res => res.json())
      .then(data => {
        setCartListMockData(data.CartListData);
      });
  }, []);

  const increaseProductPriceAndAmount = e => {
    let copy = [...cartListMockData];

    copy[e.target.id].productAmount = copy[e.target.id].productAmount + 1;
    copy[e.target.id].paymentAmount =
      copy[e.target.id].productAmount * copy[e.target.id].productPrice;
    return setCartListMockData(copy);
  };

  const decreaseProductPriceAndAmount = e => {
    let copy = [...cartListMockData];
    copy[e.target.id].productAmount = copy[e.target.id].productAmount - 1;
    copy[e.target.id].paymentAmount =
      copy[e.target.id].productAmount * copy[e.target.id].productPrice;
    return setCartListMockData(copy);
  };

  const deleteCartList = e => {
    let copy = [...cartListMockData];
    copy.splice(e.target.id, 1);
    setCartListMockData(copy);
  };

  return (
    <div id="cart-wrapper">
      <p className="cart-title">장바구니</p>
      <section className="cart-container">
        <div className="cart-table">
          <div className="cart-head">
            <div className="cart-head-info">상품정보</div>
            <div className="cart-head-amount">수량</div>
            <div className="cart-head-price">가격</div>
          </div>
          {cartListMockData.map(cartData => {
            return (
              <CartList
                key={cartData.id}
                id={cartData.id}
                cartListData={cartData}
                deleteCartList={deleteCartList}
                increaseProductPriceAndAmount={increaseProductPriceAndAmount}
                decreaseProductPriceAndAmount={decreaseProductPriceAndAmount}
              ></CartList>
            );
          })}
        </div>
        <CartPayment
          cartList={cartListMockData}
          totalPayment={totalPayment}
        ></CartPayment>
      </section>
    </div>
  );
}
export default Cart;
