import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

// Components
import SocailLogin from '../Login/SocialLogin/SocailLogin';
import LoginSuggestion from '../Login/LoginSuggestion/LoginSuggestion';

function Signup() {
  // loginSuggestion props
  const suggestionText = ['signup', ' 회원', '/login', '로그인하기'];

  // register page 로 이동하는 함수
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="signup-container setting-column">
      {/* 너비 조절을 위해 content 감싸는 div 생성 */}
      <div className="signup-content">
        <div className="signup-title setting-center">회원가입</div>
        {/* SNS 간편 로그인  */}
        <SocailLogin
          type={'signup'}
          title={'SNS 계정으로 간편하게 가입하기'}
        />{' '}
        {/* email 간편 로그인  */}
        <span className="signup-subtitle">이메일로 가입하기</span>
        <article className="sns-signup-wrap">
          <form>
            <button
              className="btn-login-email"
              type="button"
              onClick={goToRegister}
              style={{
                backgroundColor: 'white',
                border: '1px solid red',
                color: 'red',
              }}
            >
              <div>정육각 회원가입 하기</div>
            </button>
          </form>
        </article>
        {/* signup to login  */}
        <LoginSuggestion text={suggestionText} />
      </div>
    </div>
  );
}

export default Signup;
