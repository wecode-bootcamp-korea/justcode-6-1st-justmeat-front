import React from 'react';
import './Login.scss';

// Components
import LoginForm from '../../components/LoginForm/LoginForm';
import LoginFind from '../../components/LoginFind/LoginFind';
import SocailLogin from '../../components/SocialLogin/SocailLogin';
import LoginSuggestion from '../../components/LoginSuggestion/LoginSuggestion';

function Login() {
  // const validation = () => {};

  return (
    // 전체 감싸는 div
    <div className="container setting-center todo">
      {/* 너비 조절을 위해 content 감싸는 div 생성 */}
      <div className="content">
        <div className="login-title todo">로그인</div>
        <LoginForm /> {/* login input & button */}
        <LoginFind /> {/* id pw 찾기  */}
        <SocailLogin type={'login'} title={'SNS 간편 로그인'} />{' '}
        {/* SNS 간편 로그인  */}
        <LoginSuggestion
          type={'login'}
          text={['이 처음', '회원가입하기']}
        />{' '}
        {/* login to signup  */}
      </div>
    </div>
  );
}

export default Login;
