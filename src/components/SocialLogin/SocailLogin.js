import React from 'react';
import './SocailLogin.scss';

function SocailLogin(props) {
  const { type, title } = props;
  return (
    <React.Fragment>
      <span className={`${type}-subtitle todo`}>{title}</span>
      <article className={`sns-${type}-wrap todo`}>
        <form>
          {/* kakao  */}
          <button className={`btn-${type}-kakao todo`}>
            <div>카카오로 시작하기</div>
          </button>
          {/* naver  */}
          <button className={`btn-${type}-naver todo`}>
            <div>네이버로 시작하기</div>
          </button>
        </form>
      </article>
    </React.Fragment>
  );
}

export default SocailLogin;
