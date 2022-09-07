import React, { useEffect } from 'react';
import './ProductInfo.scss';

function ProductInfo(props) {
  const { productInfo } = props;

  return (
    <>
      {productInfo !== undefined ? (
        <div className="ProductInfo-container">
          <div className="ProductInfo-content">
            <div className="ProductInfo-content-title">
              <div className="text text-center">
                <p className="title">왜 저스트미트인가요?</p>
                <p className="content">
                  <span
                    style={{
                      color: 'rgb(114, 212, 212)',
                      fontWeight: 'bold',
                      marginRight: '10px',
                    }}
                  >
                    신선한 상품을 합리적인 가격에
                  </span>
                  저스트미트에서 만나보실 수 있기 때문입니다.
                </p>
              </div>
            </div>
            <div className="ProductInfo-content-arrival-date text-center">
              <p className="title">
                주문하신 상품의 <span>발송일</span>을 확인하세요.
              </p>
              <div className="card setting-center">
                <div className="month setting-center">
                  <div>0</div>
                  <div>9</div>
                  <span>월</span>
                </div>
                <div className="day setting-center">
                  <div>0</div>
                  <div>9</div>
                  <span>일</span>
                </div>
              </div>
              <p className="content"></p>
            </div>
            <div className="ProductInfo-content-detail setting-center">
              <p className="title">
                {productInfo[0].productName}은 이렇게 다릅니다.
              </p>
              <div className="card-wrap">
                <div className="card">
                  <div className="card-img-wrap">
                    <img
                      src={productInfo[0].productImg1}
                      alt={`productIMG-1`}
                    />
                  </div>
                  <div className="card-detail-wrap">
                    <p className="title">깔끔한 냄새</p>
                    <p className="bar"></p>
                    <p className="content">저스트 미트만의</p>
                    <p className="content">철저한 유통관리로 인한</p>
                    <p className="content">보장된 신선도 !</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img-wrap">
                    <img
                      src={productInfo[0].productImg2}
                      alt={`productIMG-2`}
                    />
                  </div>
                  <div className="card-detail-wrap">
                    <p className="title">질리지 않는 맛</p>
                    <p className="bar"></p>
                    <p className="content">저스트미트의 상품은</p>
                    <p className="content">먹어도 먹어도</p>
                    <p className="content">질리지 않습니다.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-img-wrap">
                    <img
                      src={productInfo[0].productImg3}
                      alt={`productIMG-3`}
                    />
                  </div>
                  <div className="card-detail-wrap">
                    <p className="title">살아있는 식감</p>
                    <p className="bar"></p>
                    <p className="content">신선하고</p>
                    <p className="content">건강한 맛</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProductInfo;
