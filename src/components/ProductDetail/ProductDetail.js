import React, { useEffect } from 'react';
import './ProductDetail.scss';

function ProductDetail(props) {
  const {} = props;

  return (
    <div className="productdetail-container todo">
      <div className="productdetail-content todo">
        <div className="productdetail-content-title">
          <div className="text text-center">
            <p className="title">왜 정육각인가요?</p>
            <p className="content">
              <span style={{ color: 'rgb(114, 212, 212)', fontWeight: 'bold' }}>
                잡은지 4일 이내의 초신선 삼겹살
              </span>
              은 오직 정육각에서만 맛볼 수 있기 때문입니다.
            </p>
          </div>
        </div>
        <div className="productdetail-content-arrival-date text-center">
          <p className="title">
            내일 받으실 삼겹살의 <span>도축일</span>을 확인하세요.
          </p>
          <div className="card setting-center">
            <div className="month setting-center">
              <div>0</div>
              <div>9</div>
              <span>월</span>
            </div>
            <div className="day setting-center">
              <div>0</div>
              <div>5</div>
              <span>일</span>
            </div>
          </div>
          <p className="content">* 당일배송 기준</p>
        </div>
        <div className="productdetail-content-detail setting-center">
          <p className="title">초신선 삼겹살(구이용)은 이렇게 다릅니다.</p>
          <div className="card-wrap">
            <div className="card">
              <div className="card-img-wrap todo">
                <img src="/images/porkbelly-fresh-detail.png" alt="사진1" />
              </div>
              <div className="card-detail-wrap todo">
                <p className="title">깔끔한 냄새</p>
                <p className="bar"></p>
                <p className="content">갓 잡은 돼지의 삼겹살은</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
