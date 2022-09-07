import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import './Mypage.scss';
import Ordered from './Ordered/Ordered';

function Mypage() {
  return (
    <div className="mypage-wrapper">
      <h1 className="mypage-title">마이페이지</h1>
      <div className="mypage-user-info-container">
        <FontAwesomeIcon className="mypage-user-level-icon" icon={faAward} />
        <div className="mypage-user-info-box">
          <div className="mypage-user-info-box-header">
            <div className="mypage-user-info-name">HELLO, 정세영님</div>
            <div className="mypage-logout">로그아웃</div>
            <div className="mypage-user-info-myquestions-box">
              <div className="mypage-user-info-myquestions-btn">내질문보기</div>
            </div>
          </div>
          <div className="mypage-user-info-detail-container ">
            <div>
              <p className="mypage-user-info-detail-title">회원등급</p>
              <p className="mypage-user-info-detail-content">[웰컴]</p>
            </div>
            <div>
              <p className="mypage-user-info-detail-title">적릭급</p>
              <p className="mypage-user-info-detail-content">[0원]</p>
            </div>
            <div>
              <p className="mypage-user-info-detail-title">쿠폰</p>
              <p className="mypage-user-info-detail-content">[0개]</p>
            </div>
            <div>
              <p className="mypage-user-info-detail-title">구매</p>
              <p className="mypage-user-info-detail-content">[0건]</p>
            </div>
            <div>
              <p className="mypage-user-info-detail-title">회원번호</p>
              <p className="mypage-user-info-detail-content">[123445566666]</p>
            </div>
          </div>
          <div className="order-info-header-container">
            <div className="order-info-header">주문내역</div>
            <div className="order-info-else">적립금내역</div>
            <div className="order-info-else">쿠폰관리</div>
            <div className="order-info-else">신선플랜</div>
            <div className="order-info-else">개인정보관리</div>
          </div>
          <Ordered />
        </div>
      </div>
    </div>
  );
}
export default Mypage;
