import React from 'react';
import './LoginForm.scss';

function LoginForm(props) {
  const {
    idValue,
    pwValue,
    handleIdInput,
    handlePwInput,
    pushValue,
    btnState1,
    btnState2,
    goToHome,
  } = props;

  return (
    <React.Fragment>
      <span className="login-subtitle todo">이메일 로그인</span>
      <article className="login-warap todo">
        <form className="login-form todo">
          {/* login input */}
          <section className="login-input-wrap">
            <input
              type="text"
              placeholder="아이디(이메일 주소)를 입력하세요"
              value={idValue}
              onChange={handleIdInput}
              onKeyUp={pushValue}
            />
            <input
              type="text"
              placeholder="비밀번호를 입력하세요"
              value={pwValue}
              onChange={handlePwInput}
              onKeyUp={pushValue}
            />
          </section>
          {/* login button  */}
          <button
            className="btn-login todo"
            type="submit"
            disabled={btnState1}
            style={{ color: 'white', backgroundColor: btnState2 }}
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
