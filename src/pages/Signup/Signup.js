import React from 'react';
import './Signup.scss';

// Components
import SocailLogin from '../../components/SocialLogin/SocailLogin';
import LoginSuggestion from '../../components/LoginSuggestion/LoginSuggestion';

function Signup() {
  return (
    <div className="container setting-center todo">
      {/* 너비 조절을 위해 content 감싸는 div 생성 */}
      <div className="content">
        <div className="signup-title todo">회원가입</div>
        {/* SNS 간편 로그인  */}
        <SocailLogin
          type={'signup'}
          title={'SNS 계정으로 간편하게 가입하기'}
        />{' '}
        {/* email 간편 로그인  */}
        <span className="signup-subtitle todo">이메일로 가입하기</span>
        <article className="sns-signup-wrap todo">
          <form>
            <button className="btn-login-email todo">
              <div>정육각 회원가입 하기</div>
            </button>
          </form>
        </article>
        {/* signup to login  */}
        <LoginSuggestion type={'signup'} text={[' 회원', '로그인하기']} />{' '}
      </div>
    </div>
  );
}

export default Signup;
