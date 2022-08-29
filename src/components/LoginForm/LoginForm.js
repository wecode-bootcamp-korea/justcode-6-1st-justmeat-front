import React from 'react';
import './LoginForm.scss';

function LoginForm() {
  return (
    <React.Fragment>
      <span className="login-subtitle todo">이메일 로그인</span>
      <article className="login-warap todo">
        <form className="login-form todo">
          {/* login input */}
          <section className="login-input-wrap">
            <input type="text" placeholder="아이디(이메일 주소)를 입력하세요" />
            <input type="text" placeholder="비밀번호를 입력하세요" />
          </section>
          {/* login button  */}
          <button className="btn-login todo">로그인</button>
        </form>
      </article>
    </React.Fragment>
  );
}

export default LoginForm;
