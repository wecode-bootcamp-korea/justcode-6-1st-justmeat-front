import "./CartList.scss";

function CartList({ cartListData, onChangeProps, key, deleteCartList }) {
  // const [cartList, setCartList] = useState([]);
  // useEffect(() => {
  //   fetch("/data/CartList.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCartList(data.CartListData);
  //     });
  // }, [cartList]);

  const amountIncreaseHandler = (event) => {
    onChangeProps(
      cartListData.id,
      "productAmount",
      cartListData.productAmount + 1
    );
  };

  const amountDecreaseHandler = (event) => {
    onChangeProps(
      cartListData.id,
      "productAmount",
      cartListData.productAmount - 1
    );
  };

  function activeMinusBtn() {
    if (cartListData.productAmount > 1) {
      return true;
    }
  }

  const addPrice = () => {
    onChangeProps(
      cartListData.id,
      "paymentAmount",
      cartListData.productPrice * (cartListData.productAmount + 1)
    );
  };
  const lowerPrice = () => {
    onChangeProps(
      cartListData.id,
      "paymentAmount",
      cartListData.productPrice * (cartListData.productAmount - 1)
    );
  };

  return (
    <>
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
                onClick={() => {
                  amountDecreaseHandler();
                  lowerPrice();
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
                onClick={() => {
                  amountIncreaseHandler();
                  addPrice();
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="cart-list-price">
            <span>{cartListData.paymentAmount}원</span>
          </div>
          <div className="cart-list-delete" onClick={deleteCartList}>
            X
          </div>
        </div>
      </section>
    </>
  );
}
export default CartList;