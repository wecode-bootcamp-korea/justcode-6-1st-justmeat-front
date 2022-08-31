import React from 'react';
import './Register1st.scss';

function Register1st() {
  return (
    <React.Fragment>
      <section className="register-status-wrap todo">
        <div className="register-status-element">
          <div>
            <img
              className="register-icon"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTYuNyA1MS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1Ni43IDUxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRjdGN0Y3O3N0cm9rZTojMDQwMDAwO3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxyZWN0IHg9IjEuOCIgeT0iMS44IiBjbGFzcz0ic3QwIiB3aWR0aD0iNDAuNCIgaGVpZ2h0PSI0Ny42Ii8+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iOSIgeTE9IjE2LjEiIHgyPSIzNS4xIiB5Mj0iMTYuMSIvPgoJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjkiIHkxPSIyNS42IiB4Mj0iMzUuMSIgeTI9IjI1LjYiLz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSI5IiB5MT0iMzUuMSIgeDI9IjM1LjEiIHkyPSIzNS4xIi8+CgkKCQk8ZWxsaXBzZSB0cmFuc2Zvcm09Im1hdHJpeCg0LjcwNzk3MGUtMDIgLTAuOTk4OSAwLjk5ODkgNC43MDc5NzBlLTAyIDMuNDMzOSA3NC40ODgxKSIgY2xhc3M9InN0MCIgY3g9IjQwLjgiIGN5PSIzNS40IiByeD0iMTQuMSIgcnk9IjE0LjEiLz4KCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjMzLjUsMzYuMSAzOC43LDQwLjQgNDUuNywzMi42IAkiLz4KPC9nPgo8L3N2Zz4K"
              alt="register-icon1"
            />
          </div>
          <div className="register-status-text">
            <span>01. 약관동의</span>
          </div>
          <div>
            <img src="/images/arrow-right.png" alt="arrow-icon" />
          </div>
          <div>
            <img
              className="register-icon"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTQuNSA0NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NC41IDQ1LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRDhEOEQ4O3N0cm9rZS13aWR0aDozLjY4NTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtmaWxsOiNGN0Y3Rjc7c3Ryb2tlOiNEOEQ4RDg7c3Ryb2tlLXdpZHRoOjMuNjg1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnPgoJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEuOCIgeTE9IjQzLjUiIHgyPSI1Mi43IiB5Mj0iNDMuNSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI1LjMsMzQuNCAxOS42LDM0LjMgNTIuNywxNC41IDQ1LjEsMS44IDEyLDIxLjYgNS4yLDM0LjIgCSIvPgoJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEyIiB5MT0iMjEuNiIgeDI9IjE5LjYiIHkyPSIzNC4zIi8+CjwvZz4KPC9zdmc+Cg=="
              alt="register-icon2"
              style={{ width: '50px' }}
            />
          </div>
          <div>
            <span className="register-status-text">02. 정보입력</span>
          </div>
        </div>
      </section>
      <section className="register-1st-wrap todo">
        <div className="register-1st-title">
          <input type="checkbox" name="전달할 값" value="전달될 값" />
          <span>정육각 서비스 약관 동의</span>
        </div>
        <div className="register-1st-content todo">
          <iframe
            src="https://yookgak.com/website/term-20191015.html"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="register-1st-title todo">
          <input type="checkbox" name="전달할 값" value="전달될 값" />
          <span>개인정보 이용 방침</span>
        </div>
        <div className="register-1st-content todo">
          <iframe
            src="https://yookgak.com/assets/private-20220502.html"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Register1st;
