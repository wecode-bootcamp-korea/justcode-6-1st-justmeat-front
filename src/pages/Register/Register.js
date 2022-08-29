import React from 'react';
import './Register.scss';

function Register() {
  return (
    <div className="container setting-center todo">
      <div className="content todo">
        <p className="register-title todo">회원가입</p>
        <section className="register-status-wrap todo">
          <img
            className="register-icon"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTYuNyA1MS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1Ni43IDUxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjdGN0Y3O3N0cm9rZTojMDQwMDAwO3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxyZWN0IHg9IjEuOCIgeT0iMS44IiBjbGFzcz0ic3QwIiB3aWR0aD0iNDAuNCIgaGVpZ2h0PSI0Ny42Ii8+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iOSIgeTE9IjE2LjEiIHgyPSIzNS4xIiB5Mj0iMTYuMSIvPgoJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjkiIHkxPSIyNS42IiB4Mj0iMzUuMSIgeTI9IjI1LjYiLz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSI5IiB5MT0iMzUuMSIgeDI9IjM1LjEiIHkyPSIzNS4xIi8+CgkKCQk8ZWxsaXBzZSB0cmFuc2Zvcm09Im1hdHJpeCg0LjcwNzk3MGUtMDIgLTAuOTk4OSAwLjk5ODkgNC43MDc5NzBlLTAyIDMuNDMzOSA3NC40ODgxKSIgY2xhc3M9InN0MCIgY3g9IjQwLjgiIGN5PSIzNS40IiByeD0iMTQuMSIgcnk9IjE0LjEiLz4KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjMzLjUsMzYuMSAzOC43LDQwLjQgNDUuNywzMi42IAkiLz4KPC9nPgo8L3N2Zz4K"
            alt="register-icon1"
          />
          <span className="register-status-text">01.약관동의</span>
          <img src="/images/arrow-right.png" alt="arrow-icon" />
          <span className="register-status-text">02.정보입력</span>
        </section>
        <section className="register-agree-wrap todo">
          <div className="register-agree-title">
            <input type="checkbox" name="전달할 값" value="전달될 값" />
            <span>정육각 서비스 약관 동의</span>
          </div>
          <div className="register-agree-content todo">
            <iframe
              src="https://yookgak.com/website/term-20191015.html"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="register-agree-title todo">
            <input type="checkbox" name="전달할 값" value="전달될 값" />
            <span>개인정보 이용 방침</span>
          </div>
          <div className="register-agree-content todo">
            <iframe
              src="https://yookgak.com/assets/private-20220502.html"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="register-btn-wrap">
            <button className="btn-previous">이전으로</button>
            <button className="btn-submit">동의하기</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
