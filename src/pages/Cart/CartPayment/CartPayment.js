import './CartPayment.scss';

function CartPayment({
  cartList,
  onChangeProps,
  totalPayment,
  payForSales,
  resetCart,
}) {
  const price = cartList.map(el => {
    return el.productAmount * el.price;
  });

  const totalPrice = price.reduce((a, b) => a + b, 0).toLocaleString('en');

  return (
    <div className="cart-payment-container">
      <div className="cart-payment-total-payment">
        <p className="cart-item-payment-text">총가격</p>
        <p className="cart-item-payment-price">{totalPrice}원</p>
      </div>
      <div className="cart-payment-total-delivery-fee">
        <p className="cart-item-payment-text">총 배송비</p>
        <p className="cart-item-payment-price">0원</p>
      </div>
      <section className="cart-payment-default-delivery-fee">
        <span>기본 배송비</span> <span>2,500원</span>
      </section>
      <section className="cart-payment-delivery-fee-free">
        <span>첫구매 무료배송</span> <span>-100%</span>
      </section>
      <p className="delivery-fee-free-applied">
        첫구매 무료배송 혜택이 적용되었습니다.
      </p>
      <p className="expected-payment">예상 결제 금액</p>
      <p className="expected-payment-amount">{totalPrice}원</p>
      <div className="payment-buttons-box">
        <button
          className="cart-order-btn"
          onClick={() => {
            payForSales();
            resetCart();
          }}
        >
          전체상품 주문하기
        </button>
        <button className="cart-shopping-btn">쇼핑계속하기</button>
      </div>
    </div>
  );
}
export default CartPayment;
