import React from 'react';
import './Register.scss';

// Components
import Register1st from './Register1st/Register1st';
import Register2nd from './Register2nd/Register2nd';

function Register() {
  const registerData = [
    {
      type: 'email',
      content: '아이디(이메일주소)',
    },
    {
      type: 'pw',
      content: '비밀번호',
    },
    {
      type: 'checkpw',
      content: '비밀번호 확인',
    },
    {
      type: 'name',
      content: '이름',
    },
  ];

  return (
    // 전체 감싸는 div
    <div className="container setting-center todo">
      {/* 너비 조절을 위한 div  */}
      <div className="register-content todo">
        <p className="register-title todo">회원가입</p>
        {/* 조건부 렌더링 - 01. 약관동의 or 02. 정보입력 */}
        <Register2nd inputDatas={registerData} />
        {/* <Register1st /> */}

        {/* button - pre or submit */}
        <div className="register-btn-wrap">
          <button className="btn-previous">이전으로</button>
          <button className="btn-submit">동의하기</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
