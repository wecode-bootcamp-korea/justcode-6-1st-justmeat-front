import React from 'react';
import './SocailLogin.scss';

function SocailLogin(props) {
  const { type, title } = props;
  return (
    <React.Fragment>
      <span className={`${type}-subtitle`}>{title}</span>
      <article className={`sns-${type}-wrap`}>
        <form>
          {/* kakao  */}
          <button
            className={`${type}-btn-kakao`}
            style={{ color: '#3A1D1D', backgroundColor: '#F7E600' }}
          >
            <img src="" alt="kakao-logo" />
            <div>카카오로 시작하기</div>
          </button>
          {/* naver  */}
          <button
            className={`${type}-btn-naver`}
            style={{ color: 'white', backgroundColor: '#2DB400' }}
          >
            <img src="" alt="naver-logo" />
            <div>네이버로 시작하기</div>
          </button>
        </form>
      </article>
    </React.Fragment>
  );
}

export default SocailLogin;
