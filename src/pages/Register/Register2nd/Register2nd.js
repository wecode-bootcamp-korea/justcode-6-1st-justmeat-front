import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterButton from '../RegisterButton/RegisterButton';
import RegisterInput from '../RegisterInput/RegisterInput';
import RegisterModal from '../RegisterModal/RegisterModal';
import './Register2nd.scss';

function Register2nd(props) {
  const { prePageButton } = props;

  // 정보입력란 state value
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCheckPassword, setRegCheckPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regCode, setRegCode] = useState('');

  const [regPhoneNum0, setRegPhoneNum0] = useState('010');
  const [regPhoneNum1, setRegPhoneNum1] = useState('');
  const [regPhoneNum2, setRegPhoneNum2] = useState('');
  const [isRegPhoneNumBtnDisabled, setIsRegPhoneNumBtnDisabled] =
    useState(true);
  const [regPhoneBtnBackColor, setRegPhoneBtnBackColor] =
    useState('rgb(246, 246, 246)');
  const [regPhoneBtnTextColor, setRegPhoneBtnTextColor] = useState('black');

  // useNavigate
  const navigate = useNavigate();

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

  // 핸드폰 국번 값 handler
  const handelSelect = e => {
    setRegPhoneNum0(e.target.value);
  };

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
    // 인증번호 요청 API
    fetch('http://localhost:10010/user/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        phone: regPhoneNum0 + regPhoneNum1 + regPhoneNum2,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.message === '존재하는 핸드폰 번호 입니다') {
          setIsRegisterModal(true);
          setErrorMessage({
            type: '전화번호 중복',
            content: result.message,
          });
          setRegPhoneNum0('');
          setRegPhoneNum1('');
          setRegPhoneNum2('');
        } else {
          setIsRegisterModal(true);
          setErrorMessage({
            type: '인증번호가 발송되었습니다.',
            content: `3분 이내에 인증번호를 입력하신 후\n다음 단계로 진행해주세요.`,
          });
          setRegCode(result.message);
        }
      });
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
        phone: regPhoneNum0 + regPhoneNum1 + regPhoneNum2, // 형식 확인
        verification: regCode,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (regEmail || regPassword || regCheckPassword || regName || regCode) {
          if (result.message === 'Not Found email') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '아아디(이메일주소) 확인',
              content: '아이디(이메일주소)가 없습니다.',
            });
          } else if (result.message === 'Not Found password') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '비밀번호 확인',
              content: '비밀번호가 없습니다.',
            });
          } else if (result.message === 'Not Found pwconfirm') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '비밀번호 확인',
              content: '비밀번호 확인이 없습니다.',
            });
          } else if (result.message === 'Not Found name') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '이름 확인',
              content: '이름이 없습니다.',
            });
          } else if (result.message === 'Not Found phone') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '휴대폰번호 확인',
              content: '휴대폰번호가 없습니다.',
            });
          } else if (result.message === 'Not Found verification') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '인증번호 확인',
              content: '인증번호가 없습니다.',
            });
          } else if (result.message === 'Password_INVALID') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '비밀번호 확인',
              content: '비밀번호를 8자 이상으로 입력해주세요.',
            });
          } else if (result.message === 'Different_Password') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '비밀번호 확인',
              content: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
            });
          } else if (result.message === 'Different_verification') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '인증번호가 잘못되었습니다.',
              content: `인증번호가 맞지 않습니다.\n휴대전화로 받으신 인증번호를 다시 입력해주세요`,
            });
          } else if (result.message === 'EXISTED_USER') {
            setCreatedCode(0);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '회원 정보 중복',
              content: '이미 등록된 회원이 존재합니다.',
            });
          } else if (result.message === 'userCreated') {
            setCreatedCode(1);
            setIsRegisterModal(true);
            setErrorMessage({
              type: '환영합니다.',
              content: '회원가입이 완료되었습니다.',
            });
          }
        } else {
          setCreatedCode(0);
          setIsRegisterModal(true);
          setErrorMessage({
            type: '정보 입력',
            content: '모든 정보를 입력해주세요.',
          });
        }
      });
  };

  // error 모달 관리 state value
  const [isRegisterModal, setIsRegisterModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [createdCode, setCreatedCode] = useState(0);
  // 모달 닫는 함수
  const closeRegisterModal = e => {
    if (e.target.id === '1') {
      // 회원가입 완료시 모달창 "확인" 버튼 누르면 메인화면으로 이동
      navigate('/');
    } else if (e.target.id === '0') {
      // 회원가입 정보 입력 오류시 그냥 모달창만 닫기
      setIsRegisterModal(false);
    }
  };

  return (
    <React.Fragment>
      <section className="register-2nd-wrap">
        <div className="register-2nd-title">
          <span>가입정보 입력</span>
        </div>
        {/* 아아디, 비밀번호, 비밀번호 확인, 이름 입력란 */}
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
          {/* 휴대폰 번호 입력란  */}
          <div className="register-2nd-content-wrap-2">
            <div className="register-2nd-input-wrap">
              <div className="register-2nd-input-type setting-center">
                <p>휴대폰번호</p>
              </div>
              <div className="register-2nd-input-phone-content">
                <select
                  className="phone-num"
                  name="phoneNum"
                  onChange={handelSelect}
                >
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
                    cursor: !isRegPhoneNumBtnDisabled ? 'pointer' : 'auto',
                  }}
                  onClick={phoneNumBtnValidation}
                >
                  인증번호 받기
                </button>
              </div>
            </div>
            {/* 인증번호 입력란 */}
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
        prePageButton={prePageButton}
      />
      {isRegisterModal ? (
        <RegisterModal
          message={errorMessage}
          id={createdCode}
          closeModal={closeRegisterModal}
        />
      ) : null}
    </React.Fragment>
  );
}

export default Register2nd;
