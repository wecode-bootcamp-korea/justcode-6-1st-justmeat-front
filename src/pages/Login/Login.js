import React, { useState } from 'react';
import './Login.scss';

// Components
import LoginForm from './LoginForm/LoginForm';
import LoginFind from './LoginFind/LoginFind';
import SocailLogin from './SocialLogin/SocailLogin';
import LoginSuggestion from './LoginSuggestion/LoginSuggestion';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal/LoginModal';

function Login() {
  // id, pw state value
  const [emailInput, setEmailInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  // loginButton 색상 state
  const [btnColor, setBtnColor] = useState('gray');
  // loginButton 활성화 비활성화 state
  const [isDisabled, setisDisabled] = useState(true);

  // loginSuggestion props
  const suggestionText = ['login', '이 처음', '/signup', '회원가입하기'];

  // id, pw input handler
  const handleEmailInput = e => {
    setEmailInput(e.target.value);
  };
  const handlePwInput = e => {
    setPwInput(e.target.value);
  };

  // id, pw validation
  function pushValue() {
    switch (!(emailInput && pwInput)) {
      case false: // inpuID, inpuPW 에 값이 있는 경우
        switch (!(emailInput.includes('@') && pwInput.length >= 8)) {
          case false: // id "@" 포함시 && pw 5글자 이상이면 loginButton 활성화
            setisDisabled(false);
            setBtnColor('black');
            break;
          default: // id "@" 미포함시 && pw 5글자 미만이면 loginButton 비활성화
            setisDisabled(true);
            setBtnColor('gray');
            break;
        }
        break;
      default: // inpuID, inpuPW 에 값이 없는 경우 loginButton 비활성화
        setisDisabled(true);
        setBtnColor('gray');
        break;
    }
  }

  // error 모달 관리 state value
  const navigate = useNavigate();
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 모달 닫는 함수
  const closeLoginModal = () => {
    setIsLoginModal(false);
  };

  // main page 로 이동하는 함수
  const goToHome = e => {
    fetch('http://localhost:10010/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: emailInput,
        password: pwInput,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'LOGIN_SUCCESS') {
          localStorage.setItem('accessToken', result.token.accessToken); // token
          localStorage.setItem('user_pk', result.token.user_pk); // userid
          navigate('/');
        } else if (result === 'NO_USER') {
          setIsLoginModal(true);
          setErrorMessage({
            type: '로그인 오류',
            content: '등록되지 않은 사용자 입니다.',
          });
        }
      });
    e.preventDefault();
  };

  // backend DB 등록 user
  // email: tkdwk2889@naver.com
  // password: qufqkqh2378

  return (
    // 전체 감싸는 div
    <div className="login-container setting-column">
      {/* 너비 조절을 위해 content 감싸는 div 생성 */}
      <div className="login-content">
        <div className="login-title setting-center">로그인</div>
        {/* login input & button */}
        <LoginForm
          emailValue={emailInput}
          pwValue={pwInput}
          handleEmailInput={handleEmailInput}
          handlePwInput={handlePwInput}
          pushValue={pushValue}
          btnState1={isDisabled}
          btnState2={btnColor}
          goToHome={goToHome}
        />
        {/* id pw 찾기  */}
        <LoginFind />
        {}
        {/* SNS 간편 로그인  */}
        <SocailLogin type={'login'} title={'SNS 간편 로그인'} />
        {/* login to signup  */}
        <LoginSuggestion text={suggestionText} />
        {isLoginModal ? (
          <LoginModal
            message={errorMessage}
            id={0}
            closeModal={closeLoginModal}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Login;
