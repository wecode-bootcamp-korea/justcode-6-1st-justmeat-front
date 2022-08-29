import React from 'react';
import './Login.module.scss';

// Components
import LoginForm from './Components/LoginForm/LoginForm';
import LoginFind from './Components/LoginFind/LoginFind';
import SocailLogin from './Components/SocialLogin/SocailLogin';
import LoginSuggestion from './Components/LoginSuggestion/LoginSuggestion';

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
        <SocailLogin /> {/* SNS 간편 로그인  */}
        <LoginSuggestion /> {/* login to signup  */}
      </div>
    </div>
  );
}

export default Login;
