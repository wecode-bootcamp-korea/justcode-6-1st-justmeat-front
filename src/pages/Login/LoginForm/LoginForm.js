import React from 'react';
import './LoginForm.scss';

function LoginForm(props) {
  const {
    emailValue,
    pwValue,
    handleEmailInput,
    handlePwInput,
    pushValue,
    btnState1,
    btnState2,
    goToHome,
  } = props;

  return (
    <React.Fragment>
      <span className="login-subtitle">이메일 로그인</span>
      <article className="login-warap">
        <form className="login-form">
          {/* login input */}
          <section className="login-input-wrap">
            <div className="email-input-wrap">
              <input
                type="text"
                placeholder="아이디(이메일 주소)를 입력하세요"
                value={emailValue}
                onChange={handleEmailInput}
                onKeyUp={pushValue}
              />
            </div>
            <div className="password-input-wrap todo">
              <input
                type="text"
                placeholder="비밀번호를 입력하세요"
                value={pwValue}
                onChange={handlePwInput}
                onKeyUp={pushValue}
              />
            </div>
          </section>
          {/* login button  */}
          <button
            className="login-btn"
            type="submit"
            disabled={btnState1}
            style={{ backgroundColor: btnState2 }}
            onClick={goToHome}
            onKeyUp={e => {
              if (e.key === 'Enter') return goToHome;
            }}
          >
            로그인
          </button>
        </form>
      </article>
    </React.Fragment>
  );
}

export default LoginForm;
