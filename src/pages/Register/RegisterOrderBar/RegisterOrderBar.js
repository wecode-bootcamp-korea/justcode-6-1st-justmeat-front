import React from 'react';
import './RegisterOrderBar.scss';

function RegisterOrderBar({ color, imgURL }) {
  return (
    <section className="register-status-wrap">
      <div className="register-status-element setting-center">
        <div>
          <img className="register-icon" src={imgURL[0]} alt="register-icon1" />
        </div>
        <div className="register-status-text">
          <span style={{ color: `${color[0]}` }}>01. 약관동의</span>
        </div>
        <div>
          <img src="/images/arrow-right.png" alt="arrow-icon" />
        </div>
        <div>
          <img
            className="register-icon"
            src={imgURL[1]}
            alt="register-icon2"
            style={{ width: '50px' }}
          />
        </div>
        <div>
          <span
            className="register-status-text"
            style={{ color: `${color[1]}` }}
          >
            02. 정보입력
          </span>
        </div>
      </div>
    </section>
  );
}

export default RegisterOrderBar;
