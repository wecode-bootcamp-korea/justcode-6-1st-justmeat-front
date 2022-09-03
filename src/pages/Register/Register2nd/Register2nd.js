import React, { useState } from 'react';
import RegisterButton from '../RegisterButton/RegisterButton';
import RegisterInput from '../RegisterInput/RegisterInput';
import './Register2nd.scss';

function Register2nd() {
  // 정보입력란 state value
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCheckPassword, setRegCheckPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regCode, setRegCode] = useState('');

  const [regPhoneNum1, setRegPhoneNum1] = useState('');
  const [regPhoneNum2, setRegPhoneNum2] = useState('');
  const [isRegPhoneNumBtnDisabled, setIsRegPhoneNumBtnDisabled] =
    useState(true);
  const [regPhoneBtnBackColor, setRegPhoneBtnBackColor] =
    useState('rgb(246, 246, 246)');
  const [regPhoneBtnTextColor, setRegPhoneBtnTextColor] = useState('black');

  // 정보입력란 type, content, handler
  const registerData = [
    {
      type: 'text',
      content: '아이디(이메일주소)',
      value: regEmail,
      handler: e => setRegEmail(e.target.value),
    },
    {
      type: 'password',
      content: '비밀번호',
      value: regPassword,
      handler: e => setRegPassword(e.target.value),
    },
    {
      type: 'password',
      content: '비밀번호 확인',
      value: regCheckPassword,
      handler: e => setRegCheckPassword(e.target.value),
    },
    {
      type: 'text',
      content: '이름',
      value: regName,
      handler: e => setRegName(e.target.value),
    },
  ];

  // 정보입력란(PhoneNum) 유효성 검사 함수
  const phoneNumValidation = e => {
    if (regPhoneNum1.length === 4 && regPhoneNum2.length === 4) {
      setIsRegPhoneNumBtnDisabled(false);
      setRegPhoneBtnBackColor('black');
      setRegPhoneBtnTextColor('white');
    } else {
      setIsRegPhoneNumBtnDisabled(true);
      setRegPhoneBtnBackColor('rgb(246, 246, 246)');
      setRegPhoneBtnTextColor('black');
    }
  };
  // regPhoneNum, setRegPhoneNume
  const phoneNumBtnValidation = e => {
    // 숫자로 4자리씩 입력할 경우 통과
    if (!isRegPhoneNumBtnDisabled) {
      alert('인증번호가 발송되었습니다.');

      // 인증번호 요청 API
      fetch('http://localhost:10010/user/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          phone: '010' + regPhoneNum1 + regPhoneNum2, // 형식 확인
        }),
      })
        .then(res => res.json())
        .then(result => {
          // console.log('=============인증번호 받기 버튼===============');
          // console.log('phone:', '010' + regPhoneNum1 + regPhoneNum2);
          console.log(result.message);
          setRegCode(result.message);

          // console.log('==========================================');
        });
    }
  };

  // 정보입력란 유효성 검사 함수
  const submitBtnValidation2 = e => {
    fetch('http://localhost:10010/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: regEmail,
        password: regPassword,
        pwconfirm: regCheckPassword,
        name: regName,
        phone: '010' + regPhoneNum1 + regPhoneNum2, // 형식 확인
        verification: regCode,
      }),
    })
      .then(res => res.json())
      .then(result => {
        // console.log('=============가입하기 버튼===============');
        // console.log('email:', regEmail);
        // console.log('pw:', regPassword);
        // console.log('pw-confirm:', regCheckPassword);
        // console.log('name:', regName);
        // console.log('phone:', '010' + regPhoneNum1 + regPhoneNum2);
        // console.log('verification:', regCode);
        // console.log('--result--');
        console.log(result);
        // console.log('======================================');
      });
    //navigate('/home');

    // password 10글자 이상
    // email @만 포함

    // if (regEmail && regPassword && regCheckPassword && regName && regCode) {
    //   if (!regEmail.includes('@'))
    //     alert(
    //       `'@'과 '@'뒷 부분을 입력해주세요. '${regEmail}'(이)가 완전하지 않습니다.`
    //     );
    //   if (regPassword !== regCheckPassword) alert('비밀번호를 확인해주세요.');
    // } else {
    //   alert('모든 정보를 입력해주세요.');
    // }
    console.log('submit');
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <section className="register-2nd-wrap">
        <div className="register-2nd-title">
          <span>가입정보 입력</span>
        </div>
        <div className="register-2nd-content-wrap">
          {registerData.map((data, index) => {
            return (
              <RegisterInput
                key={index}
                type={data.type}
                content={data.content}
                value={data.value}
                handler={data.handler}
              />
            );
          })}
          <div className="register-2nd-content-wrap-2">
            <div className="register-2nd-input-wrap">
              <div className="register-2nd-input-type setting-center">
                <p>휴대폰번호</p>
              </div>
              <div className="register-2nd-input-phone-content">
                <select className="phone-num" name="phoneNum">
                  <option value="010">010</option>
                  <option value="010">010</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="019">019</option>
                </select>
                <div className="phone-split">-</div>
                <input
                  className="phone-num"
                  type="tel"
                  maxLength="4"
                  value={regPhoneNum1}
                  onChange={e =>
                    setRegPhoneNum1(e.target.value.replace(/[^0-9]/g, ''))
                  }
                  onKeyUp={phoneNumValidation}
                />
                <div className="phone-split">-</div>
                <input
                  className="phone-num"
                  type="tel"
                  maxLength="4"
                  value={regPhoneNum2}
                  onChange={e =>
                    setRegPhoneNum2(e.target.value.replace(/[^0-9]/g, ''))
                  }
                  onKeyUp={phoneNumValidation}
                />
                <button
                  className="phone-num"
                  disabled={isRegPhoneNumBtnDisabled}
                  style={{
                    color: regPhoneBtnTextColor,
                    backgroundColor: regPhoneBtnBackColor,
                  }}
                  onClick={phoneNumBtnValidation}
                >
                  인증번호 받기
                </button>
              </div>
            </div>
            <RegisterInput
              type="text"
              content="인증번호"
              value={regCode}
              handler={e => setRegCode(e.target.value)}
            />
          </div>
        </div>
      </section>
      {/* button - pre or submit */}
      <RegisterButton
        inputText={'가입하기'}
        submitBtnValidation={submitBtnValidation2}
      />
    </React.Fragment>
  );
}

export default Register2nd;
