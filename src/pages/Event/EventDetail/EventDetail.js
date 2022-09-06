import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.scss';

function EventDetail() {
  // const location = useLocation();
  const params = useParams();
  const eventId = params.id;

  // Event Data state value
  const [eventDetailContent, setEventDetailContent] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:10010/event/${eventId}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       data.result.map(eventInfo => {
  //         setEventDetailContent(eventInfo.content);
  //       });
  //     });
  // }, [params.id]);

  return (
    <div className="eventdetail-contain setting-center todo">
      <div className="eventdetail-content-wrap">
        {/* <span dangerouslySetInnerHTML={{ __html: eventDetailContent }}></span> */}
        <div className="eventdtail-title-wrap">
          <p className="eventdtail-subtitle">
            정성스러운 명절 음식 준비, 지금바로 정육각에서
          </p>
          <p className="eventdtail-title">추석 전상품 할인</p>
          <p className="eventdtail-subtitle">
            오랜만에 한 자리에 모이는 가족을 위한 상차림, 물가 걱정 없이
          </p>
          <p className="eventdtail-subtitle">
            준비하시라고 넉넉한 혜택을 준비했어요.
          </p>
        </div>
        <div className="eventdetail-coupon-wrap">
          <div className="eventdetail-coupon-title text-center">
            <p className="eventdtail-subtitle">보름달처럼 꽉 찬 혜택</p>
            <p className="eventdtail-coupon-title">추석 맞이 할인 쿠폰팩</p>
          </div>
          <div className="eventdetail-coupons-wrap setting-center text-center">
            <div className="eventdetail-coupons">
              <p className="a">3만원 이상 주문 시</p>
              <span className="b">3,000원</span>
              <span className="c">할인</span>
            </div>
            <div className="eventdetail-coupons">
              <p className="a">6만원 이상 주문 시</p>
              <span className="b">6,000원</span>
              <span className="c">할인</span>
            </div>
            <div className="eventdetail-coupons">
              <p className="a">9만원 이상 주문 시</p>
              <span className="b">9,000원</span>
              <span className="c">할인</span>
            </div>
            <div className="eventdetail-coupons">
              <p className="a">12만원 이상 주문 시</p>
              <span className="b">12,000원</span>
              <span className="c">할인</span>
            </div>
          </div>
          <div className="eventdetail-download-wrap setting-center">
            <div className="eventdetail-download">쿠폰 모두 받기</div>
            <div className="eventdetail-download-text">
              9월 16일(금)까지 사용가능
            </div>
          </div>
        </div>
        <div className="eventdetail-suggestion-wrap setting-center">
          <div className="eventdetail-suggestion-title text-center">
            <p className="eventdtail-subtitle">정육각 단골 고객의</p>
            <p className="eventdtail-title">추석 추천 상품</p>
          </div>
          <div className="eventdetail-suggestion-cards">
            <article className="eventdetail-suggestion-card">
              <div className="img">
                <img src="/images/beef-soup.png" alt="소고기 탕국 이미지" />
              </div>
              <div className="card-detail">
                <div className="card-detail-text">
                  <p className="title">담백한 맛이 그대로 담긴</p>
                  <p className="subtitle">소고기 탕국</p>
                </div>
                <div className="eventdetail-suggestion-card-detail-card">
                  <img
                    className="img"
                    src="/images/porkneck-fresh-detail.png"
                    alt="한우 양지 국거리"
                  />
                  <div className="card-detail-text">
                    <p className="detail1">한우 양지 국거리용</p>
                    <span className="detail2">(1+등급 이상) 300g</span>
                    <p className="price">24,600원</p>
                  </div>
                  <div className="cart setting-center">
                    <img src="/images/cart-icon.png" alt="" />
                  </div>
                </div>
              </div>
            </article>
            <article className="eventdetail-suggestion-card">
              <div className="img">
                <img src="/images/beef-soup1.png" alt="소고기 탕국 이미지" />
              </div>
              <div className="card-detail">
                <div className="card-detail-text">
                  <p className="title">담백한 맛이 그대로 담긴</p>
                  <p className="subtitle">소고기 육전</p>
                </div>
                <div className="eventdetail-suggestion-card-detail-card">
                  <img
                    className="img"
                    src="/images/porkbelly-fresh-detail.png"
                    alt="한우 양지 국거리"
                  />
                  <div className="card-detail-text">
                    <p className="detail1">한우 설도 불고기용</p>
                    <span className="detail2">(1+등급 이상) 300g</span>
                    <p className="price">14,600원</p>
                  </div>
                  <div className="cart setting-center">
                    <img src="/images/cart-icon.png" alt="" />
                  </div>
                </div>
              </div>
            </article>
            <article className="eventdetail-suggestion-card">
              <div className="img">
                <img src="/images/beef-soup2.png" alt="소고기 탕국 이미지" />
              </div>
              <div className="card-detail">
                <div className="card-detail-text">
                  <p className="title">담백한 맛이 그대로 담긴</p>
                  <p className="subtitle">소고기 사태찜</p>
                </div>
                <div className="eventdetail-suggestion-card-detail-card">
                  <img
                    className="img"
                    src="/images/porkbelly-fresh-whole-detail.png"
                    alt="한우 양지 국거리"
                  />
                  <div className="card-detail-text">
                    <p className="detail1">한우 사태 요리용</p>
                    <span className="detail2">(1+등급 이상) 300g</span>
                    <p className="price">18,600원</p>
                  </div>
                  <div className="cart setting-center">
                    <img src="/images/cart-icon.png" alt="" />
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="eventdetail-suggestion-more">더 많은 상품 보기</div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
