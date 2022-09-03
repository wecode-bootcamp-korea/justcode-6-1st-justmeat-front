import React, { useRef, useState } from 'react';
import './Register.scss';

// Components
import Register1st from './Register1st/Register1st';
import Register2nd from './Register2nd/Register2nd';
import RegisterButton from './RegisterButton/RegisterButton';
import RegisterOrderBar from './RegisterOrderBar/RegisterOrderBar';

function Register() {
  // 01. 약관동의 버튼
  const [isCheckbox1, setIsCheckbox1] = useState(false);
  const [isCheckbox2, setIsCheckbox2] = useState(false);
  // 01. 동의하기 버튼
  const [isSubmitBtn, setIsSubmitBtn] = useState(false);
  // 02. 정보입력 input state

  // 01. 약관동의 절차 메뉴 아이콘 이미지 경로
  const register1stImgURL = [
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTYuNyA1MS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1Ni43IDUxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjdGN0Y3O3N0cm9rZTojMDQwMDAwO3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxyZWN0IHg9IjEuOCIgeT0iMS44IiBjbGFzcz0ic3QwIiB3aWR0aD0iNDAuNCIgaGVpZ2h0PSI0Ny42Ii8+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iOSIgeTE9IjE2LjEiIHgyPSIzNS4xIiB5Mj0iMTYuMSIvPgoJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjkiIHkxPSIyNS42IiB4Mj0iMzUuMSIgeTI9IjI1LjYiLz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSI5IiB5MT0iMzUuMSIgeDI9IjM1LjEiIHkyPSIzNS4xIi8+CgkKCQk8ZWxsaXBzZSB0cmFuc2Zvcm09Im1hdHJpeCg0LjcwNzk3MGUtMDIgLTAuOTk4OSAwLjk5ODkgNC43MDc5NzBlLTAyIDMuNDMzOSA3NC40ODgxKSIgY2xhc3M9InN0MCIgY3g9IjQwLjgiIGN5PSIzNS40IiByeD0iMTQuMSIgcnk9IjE0LjEiLz4KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjMzLjUsMzYuMSAzOC43LDQwLjQgNDUuNywzMi42IAkiLz4KPC9nPgo8L3N2Zz4K',
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTQuNSA0NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NC41IDQ1LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRDhEOEQ4O3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtmaWxsOiNGN0Y3Rjc7c3Ryb2tlOiNEOEQ4RDg7c3Ryb2tlLXdpZHRoOjMuNjg1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnPgoJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEuOCIgeTE9IjQzLjUiIHgyPSI1Mi43IiB5Mj0iNDMuNSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI1LjMsMzQuNCAxOS42LDM0LjMgNTIuNywxNC41IDQ1LjEsMS44IDEyLDIxLjYgNS4yLDM0LjIgCSIvPgoJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEyIiB5MT0iMjEuNiIgeDI9IjE5LjYiIHkyPSIzNC4zIi8+CjwvZz4KPC9zdmc+Cg==',
  ];
  // 02. 정보입력 절차 메뉴 아이콘 이미지 경로
  const register2ndImgURL = [
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTYuNyA1MS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1Ni43IDUxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjdGN0Y3O3N0cm9rZTojRDhEOEQ4O3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNEOEQ4RDg7c3Ryb2tlLXdpZHRoOjMuNjg1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnPgoJPHJlY3QgeD0iMS44IiB5PSIxLjgiIGNsYXNzPSJzdDAiIHdpZHRoPSI0MC40IiBoZWlnaHQ9IjQ3LjYiLz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSI5IiB5MT0iMTYuMSIgeDI9IjM1LjEiIHkyPSIxNi4xIi8+Cgk8bGluZSBjbGFzcz0ic3QxIiB4MT0iOSIgeTE9IjI1LjYiIHgyPSIzNS4xIiB5Mj0iMjUuNiIvPgoJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjkiIHkxPSIzNS4xIiB4Mj0iMzUuMSIgeTI9IjM1LjEiLz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQwLjgiIGN5PSIzNS40IiByPSIxNC4xIi8+Cgk8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSIzMy41LDM2LjEgMzguNyw0MC40IDQ1LjcsMzIuNiAJIi8+CjwvZz4KPC9zdmc+Cg==',
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTQuNSA0NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NC41IDQ1LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjdGN0Y3O3N0cm9rZTojMDQwMDAwO3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxLjgiIHkxPSI0My41IiB4Mj0iNTIuNyIgeTI9IjQzLjUiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNS4zLDM0LjQgMTkuNiwzNC4zIDUyLjcsMTQuNSA0NS4xLDEuOCAxMiwyMS42IDUuMiwzNC4yIAkiLz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxMiIgeTE9IjIxLjYiIHgyPSIxOS42IiB5Mj0iMzQuMyIvPgo8L2c+Cjwvc3ZnPgo=',
  ];

  // 01. 이용약관 checkbox 유효성 검사 함수
  const checkboxValidation = e => {
    if (e.target.id === 'checkbox1') {
      setIsCheckbox1(prev => !prev);
    } else if (e.target.id === 'checkbox2') {
      setIsCheckbox2(prev => !prev);
    }
  };

  // 01. 동의하기 버튼 유효성 감사 함수
  const submitBtnValidation1 = () => {
    switch (isCheckbox1 && isCheckbox2) {
      case true:
        setIsSubmitBtn(true);
        break;
      case false:
        setIsSubmitBtn(false);
        alert('이용약관과 개인정보 이용 방침에 모두 동의해주세요.');
        break;
    }
  };

  return (
    // 전체 감싸는 div
    <div className="register-container setting-center">
      {/* 너비 조절을 위한 div  */}
      <div className="register-content">
        <p className="register-title">회원가입</p>
        {/* 조건부 렌더링 - 01. 약관동의 or 02. 정보입력 */}
        {!isSubmitBtn ? (
          <div>
            <RegisterOrderBar
              color={['black', 'rgb(186, 186, 186)']}
              imgURL={register1stImgURL}
            />
            <Register1st
              isCheckbox={[isCheckbox1, isCheckbox2]}
              checkboxValidation={checkboxValidation}
            />
            {/* button - pre or submit */}
            <RegisterButton
              inputText={'동의하기'}
              submitBtnValidation={submitBtnValidation1}
            />
          </div>
        ) : (
          <div>
            <RegisterOrderBar
              color={['rgb(186, 186, 186)', 'black']}
              imgURL={register2ndImgURL}
            />
            <Register2nd setIsSubmitBtn={setIsSubmitBtn} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
