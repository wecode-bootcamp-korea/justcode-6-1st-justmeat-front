import CartList from "./CartList/CartList";
import "./Cart.scss";
import { useEffect, useState } from "react";
import CartPayment from "./CartPayment/CartPayment";

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  useEffect(() => {
    fetch("/data/CartList.json")
      .then((res) => res.json())
      .then((data) => {
        setCartList(data.CartListData);
      });
  }, []);

  const onChangeProps = (id, key, value) => {
    setCartList((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  const deleteCartList = (key) => {
    let copy = [...cartList];
    copy.splice(key, 1);
    setCartList(copy);
  };

  const totalPrice = () => {
    for (let i = 0; i < cartList.length; i++) {
      let add = cartList[0].paymentAmount + cartList[i].paymentAmount;
      return setTotalPayment(add);
    }
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
          {cartList.map((cartList, i) => {
            return (
              <CartList
                key={i}
                cartListData={cartList}
                onChangeProps={onChangeProps}
                deleteCartList={deleteCartList}
              ></CartList>
            );
          })}
        </div>
        <CartPayment
          cartList={cartList}
          onChangeProps={onChangeProps}
          totalPrice={totalPrice}
          totalPayment={totalPayment}
        ></CartPayment>
      </section>
    </div>
  );
}
export default Cart;