import React from 'react';
import './Register2nd.scss';

function Register2nd(props) {
  const { inputDatas } = props;

  return (
    //  menu - 01. 약관동의 02. 정보입력
    <React.Fragment>
      <section className="register-status-wrap todo">
        <div className="register-status-element">
          <div>
            <img
              className="register-icon"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTYuNyA1MS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1Ni43IDUxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjdGN0Y3O3N0cm9rZTojRDhEOEQ4O3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNEOEQ4RDg7c3Ryb2tlLXdpZHRoOjMuNjg1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnPgoJPHJlY3QgeD0iMS44IiB5PSIxLjgiIGNsYXNzPSJzdDAiIHdpZHRoPSI0MC40IiBoZWlnaHQ9IjQ3LjYiLz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSI5IiB5MT0iMTYuMSIgeDI9IjM1LjEiIHkyPSIxNi4xIi8+Cgk8bGluZSBjbGFzcz0ic3QxIiB4MT0iOSIgeTE9IjI1LjYiIHgyPSIzNS4xIiB5Mj0iMjUuNiIvPgoJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjkiIHkxPSIzNS4xIiB4Mj0iMzUuMSIgeTI9IjM1LjEiLz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQwLjgiIGN5PSIzNS40IiByPSIxNC4xIi8+Cgk8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSIzMy41LDM2LjEgMzguNyw0MC40IDQ1LjcsMzIuNiAJIi8+CjwvZz4KPC9zdmc+Cg=="
              alt="register-icon1"
            />
          </div>
          <div className="register-status-text">
            <span>01.약관동의</span>
          </div>
          <div>
            <img src="/images/arrow-right.png" alt="arrow-icon" />
          </div>
          <div>
            <img
              className="register-icon"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTQuNSA0NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NC41IDQ1LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjdGN0Y3O3N0cm9rZTojMDQwMDAwO3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxLjgiIHkxPSI0My41IiB4Mj0iNTIuNyIgeTI9IjQzLjUiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNS4zLDM0LjQgMTkuNiwzNC4zIDUyLjcsMTQuNSA0NS4xLDEuOCAxMiwyMS42IDUuMiwzNC4yIAkiLz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxMiIgeTE9IjIxLjYiIHgyPSIxOS42IiB5Mj0iMzQuMyIvPgo8L2c+Cjwvc3ZnPgo="
              alt="register-icon2"
            />
          </div>
          <div>
            <span className="register-status-text">02.정보입력</span>
          </div>
        </div>
      </section>
      <section className="register-input-wrap todo">
        <div className="register-input-title todo">
          <span>가입정보 입력</span>
        </div>
        <div className="register-input-content todo">
          {inputDatas.map((data, index) => {
            return (
              <div
                className={`register-input-${data.type} todo`}
                key={index}
                style={{ display: 'flex' }}
              >
                <div className="register-input-type">
                  <p>{data.content}</p>
                </div>
                <div className="register-input-type-content todo">
                  <input type="text" />
                </div>
              </div>
            );
          })}
          <div className="register-input-content">
            <div className="register-input-phone todo">
              <div className="register-input-type">
                <p>휴대폰번호</p>
              </div>
              <div className="register-input-phone-content todo">
                <select name="phoneNum">
                  <option value="010">010</option>
                  <option value="010">010</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="019">019</option>
                </select>
                <div className="phone-split">-</div>
                <input type="tel" />
                <div className="phone-split">-</div>
                <input type="tel" />
                <button>인증번호 받기</button>
              </div>
            </div>
            <div className="register-input-code todo">
              <div className="register-input-type">
                <p>인증번호</p>
              </div>
              <div className="register-input-type-content todo">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Register2nd;
