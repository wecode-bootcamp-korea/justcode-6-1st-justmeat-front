import React from 'react';
import './SocailLogin.scss';

function SocailLogin() {
  return (
    <React.Fragment>
      <span className="login-subtitle todo">SNS 간편 로그인</span>
      <article className="sns-login-wrap todo">
        <form>
          {/* kakao  */}
          <button className="btn-login-kakao todo">
            <div>카카오로 시작하기</div>
          </button>
          {/* naver  */}
          <button className="btn-login-naver todo">
            <div>네이버로 시작하기</div>
          </button>
        </form>
      </article>
    </React.Fragment>
  );
}

export default SocailLogin;
