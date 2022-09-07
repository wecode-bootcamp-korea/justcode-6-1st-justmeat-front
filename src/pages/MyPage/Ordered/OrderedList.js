function OrderedList({ mypage }) {
  return (
    <div className="mypage-ordered-container">
      <div className="mypage-ordered-img-box">
        <img
          className="mypage-ordered-img"
          src={mypage.productImgMain}
          alt="초신선 무항생제 돼지 삼겹살 구이용"
        ></img>
      </div>
      <div className="mypage-ordered-product-info">
        <p className="mypage-ordered-title">{mypage.productName}</p>
        <span className="mypage-product-option">{mypage.productOption}</span>
      </div>
      <div className="mypage-product-amount">{mypage.productAmount}팩</div>
      <div className="mypage-price-amount">{mypage.paymentAmount}원</div>
    </div>
  );
}
export default OrderedList;
