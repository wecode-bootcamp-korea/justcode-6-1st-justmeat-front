import React from 'react';
import './Register1st.scss';

function Register1st(props) {
  const { isCheckbox, checkboxValidation } = props;

  return (
    <React.Fragment>
      <section className="register-1st-wrap">
        <div className="register-1st-title">
          <input
            type="checkbox"
            id="checkbox1"
            checked={isCheckbox[0]}
            onChange={checkboxValidation}
            style={{ cursor: 'pointer' }}
          />
          <span>정육각 서비스 약관 동의</span>
        </div>
        <div className="register-1st-content">
          <iframe src="https://yookgak.com/website/term-20191015.html"></iframe>
        </div>
        <div className="register-1st-title">
          <input
            type="checkbox"
            id="checkbox2"
            checked={isCheckbox[1]}
            onChange={checkboxValidation}
            style={{ cursor: 'pointer' }}
          />
          <span>개인정보 이용 방침</span>
        </div>
        <div className="register-1st-content">
          <iframe src="https://yookgak.com/assets/private-20220502.html"></iframe>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Register1st;
