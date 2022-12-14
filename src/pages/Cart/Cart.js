import CartList from './CartList/CartList';
import './Cart.scss';
import { useEffect, useState } from 'react';
import CartPayment from './CartPayment/CartPayment';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import CartModal from './CartModal/CartModal';

function Cart() {
  const [cartListMockData, setCartListMockData] = useState([]);

  // error 모달 관리 state value
  const [isBuyModal, setIsBuyModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 모달 닫는 함수
  const closeCartModal = () => {
    setIsBuyModal(false);
  };

  /*접속 user의 장바구니 데이터 서버에서 불러오기*/
  useEffect(() => {
    fetch(`http://localhost:10010/cart/${localStorage.getItem('user_pk')}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartListMockData(data.data);
      });
  }, []);

  /*접속 user의 장바구니 수량 및 가격 변경*/
  const increaseProductPriceAndAmount = e => {
    let copy = [...cartListMockData];
    console.log(e.target.id);
    copy[e.target.id].productAmount = copy[e.target.id].productAmount + 1;
    copy[e.target.id].paymentAmount =
      copy[e.target.id].productAmount * copy[e.target.id].price;
    return setCartListMockData(copy);
    console.log(cartListMockData);
  };

  const decreaseProductPriceAndAmount = e => {
    let copy = [...cartListMockData];
    copy[e.target.id].productAmount = copy[e.target.id].productAmount - 1;
    copy[e.target.id].paymentAmount =
      copy[e.target.id].productAmount * copy[e.target.id].price;
    return setCartListMockData(copy);
  };

  function patchAmountIncrease(e) {
    try {
      axios.patch(
        `http://localhost:10010/cart/${localStorage.getItem('user_pk')}`,
        {
          userId: cartListMockData[e.target.id].userId,
          productId: cartListMockData[e.target.id].productId,
          productAmount: cartListMockData[e.target.id].productAmount,
          paymentAmount: cartListMockData[e.target.id].paymentAmount,
        },
        {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        }
      );
      console.log(cartListMockData);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error:${err.message}`);
      }
    }
  }

  /*접속 user의 장바구니 삭제*/
  const deleteCartList = e => {
    let copy = [...cartListMockData];
    copy.splice(e.target.id, 1);
    setCartListMockData(copy);
  };
  function deleteCartListData(e) {
    // setCartId(cartListMockData[e.target.id].cartId);
    try {
      axios.delete(
        `http://localhost:10010/cart/${localStorage.getItem('user_pk')}`,
        {
          // userId: cartListMockData[e.target.id].userId,
          productId: cartListMockData[e.target.id].productId,
          productAmount: cartListMockData[e.target.id].productAmount,
        },
        {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        }
      );
      console.log(cartListMockData);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error:${err.message}`);
      }
    }
  }

  function deleteCartListData(e) {
    fetch(`http://localhost:10010/cart/${cartListMockData[e.target.id].id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        id: cartListMockData[e.target.id].id,
        userId: cartListMockData[e.target.id].userId,
        productId: cartListMockData[e.target.id].productId,
        productAmount: cartListMockData[e.target.id].productAmount,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  /*결제*/
  function payForSales(e) {
    fetch(`http://localhost:10010/sale/${localStorage.getItem('user_pk')}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        userId: cartListMockData.userId,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (
          data.message ===
          '구매가 완료 되었습니다. 신선한 상품으로 배송해드리겠습니다'
        ) {
          setIsBuyModal(true);
          setErrorMessage({
            type: '구매 성공',
            content:
              '구매가 완료 되었습니다. 신선한 상품으로 배송해드리겠습니다.',
          });
          setCartListMockData([]);
        } else if (data === 'Point가 부족합니다. 구매에 실패하셨습니다.') {
          setIsBuyModal(true);
          setErrorMessage({
            type: '구매 실패',
            content: 'Point가 부족합니다. 구매에 실패하셨습니다.',
          });
        } else if (data.message === '카트가 비어있습니다') {
          setIsBuyModal(true);
          setErrorMessage({
            type: '구매 실패',
            content: '카트가 비어있습니다',
          });
        } else if (data === '상품 재고가 부족합니다') {
          setIsBuyModal(true);
          setErrorMessage({
            type: '구매 실패',
            content: '상품 재고가 부족합니다',
          });
        }
      })
      .catch(error => console.log(error));
  }

  function resetCart() {
    fetch(`http://localhost:10010/cart/${localStorage.getItem('user_pk')}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartListMockData(data.data);
      });
  }

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
          {cartListMockData.map((cartData, i) => {
            return (
              <CartList
                key={i}
                id={i}
                cartListData={cartData}
                deleteCartList={deleteCartList}
                patchAmountIncrease={patchAmountIncrease}
                increaseProductPriceAndAmount={increaseProductPriceAndAmount}
                decreaseProductPriceAndAmount={decreaseProductPriceAndAmount}
                deleteCartListData={deleteCartListData}
              ></CartList>
            );
          })}
        </div>
        <CartPayment
          cartList={cartListMockData}
          payForSales={payForSales}
          resetCart={resetCart}
        ></CartPayment>
        {isBuyModal && (
          <CartModal
            id={0}
            message={errorMessage}
            closeModal={closeCartModal}
          ></CartModal>
        )}
      </section>
    </div>
  );
}
export default Cart;
