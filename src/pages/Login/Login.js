import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

// Components
import LoginForm from '../../components/LoginForm/LoginForm';
import LoginFind from '../../components/LoginFind/LoginFind';
import SocailLogin from '../../components/SocialLogin/SocailLogin';
import LoginSuggestion from '../../components/LoginSuggestion/LoginSuggestion';

function Login() {
  // id, pw state value
  const [emailInput, setEmailInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  // loginButton 색상 state
  const [btnColor, setBtnColor] = useState('gray');
  // loginButton 활성화 비활성화 state
  const [btnDisabled, setBtnDisabled] = useState(true);

  // id, pw input handler
  const handleEmailInput = e => {
    setEmailInput(e.target.value);
  };
  const handlePwInput = e => {
    setPwInput(e.target.value);
  };

  // login API POST (email, password)
  const [loginAPI, setloginAPI] = useState({
    email: '',
    password: 'password',
  });

  // id, pw validation
  function pushValue() {
    switch (!(emailInput && pwInput)) {
      case false: // inpuID, inpuPW 에 값이 있는 경우
        switch (!(emailInput.includes('@') && pwInput.length >= 5)) {
          case false: // id "@" 포함시 && pw 5글자 이상이면 loginButton 활성화
            setBtnDisabled(false);
            setBtnColor('blue');
            break;
          default: // id "@" 미포함시 && pw 5글자 미만이면 loginButton 비활성화
            setBtnDisabled(true);
            setBtnColor('gray');
            break;
        }
        break;
      default: // inpuID, inpuPW 에 값이 없는 경우 loginButton 비활성화
        setBtnDisabled(true);
        setBtnColor('gray');
        break;
    }
  }

  // main page 로 이동하는 함수
  const navigate = useNavigate();
  const goToHome = e => {
    fetch('http://localhost:10010/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput,
        password: pwInput,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
    e.preventDefault();
    //navigate('/home');
  };

  // backend DB 등록 user
  // email: 9hyun@gmail.com
  // password: 9hyun

  // register page 로 이동하는 함수
  const goToRegister = () => {
    navigate('/register');
  };

  return (
    // 전체 감싸는 div
    <div className="container setting-center todo">
      {/* 너비 조절을 위해 content 감싸는 div 생성 */}
      <div className="content">
        <div className="login-title todo">로그인</div>
        {/* login input & button */}
        <LoginForm
          emailValue={emailInput}
          pwValue={pwInput}
          handleEmailInput={handleEmailInput}
          handlePwInput={handlePwInput}
          pushValue={pushValue}
          btnState1={btnDisabled}
          btnState2={btnColor}
          goToHome={goToHome}
        />
        {/* id pw 찾기  */}
        <LoginFind />
        {/* SNS 간편 로그인  */}
        <SocailLogin type={'login'} title={'SNS 간편 로그인'} />
        {/* login to signup  */}
        <LoginSuggestion
          type={'login'}
          text={['이 처음', '회원가입하기']}
          goToRegister={goToRegister}
        />
      </div>
    </div>
  );
}

export default Login;
