import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <section className="footer-navigation">
          <div className="footer-navigation-main">
            <a>인재채용</a>
            <p>이용약관</p>
            <p>개인정보처리방침</p>
          </div>
          <div className="footer-navigation-external">
            <button>
              <FontAwesomeIcon
                className="footer-navigation-external-icon2"
                icon={faMobileScreenButton}
              />
              정육각 앱 설치
            </button>
            <FontAwesomeIcon
              className="footer-navigation-external-icon"
              icon={faComment}
            />
            <FontAwesomeIcon
              className="footer-navigation-external-icon"
              icon={faInstagram}
            />
          </div>
        </section>
        <section className="footer-main">
          <article className="footer-main-info">
            <p className="footer-logo">로고</p>

            <div className="footer-main-team-info">
              <div className="front-members">
                <h4>Front end</h4>
                <p>구현</p>
                <p>정세영</p>
                <p>박기호</p>
              </div>
              <div className="back-members">
                <h4>Back end</h4>
                <p>이해연</p>
                <p>오인환</p>
              </div>
            </div>
          </article>
          <article className="footer-main-cs">
            <div>
              <h6>고객센터</h6>
              <h3>1800-0658</h3>
              <p>
                평일:08:30 - 17:30
                <br></br>
                점심: 12:30 - 13:30
                <br></br>
                (토,일 및 공휴일 휴무)
              </p>

              <p>
                카카오톡:
                <span>
                  <a>@정육각</a>
                </span>
              </p>
              <p>
                이메일:
                <span>
                  <a>help@yookgak.com</a>
                </span>
              </p>
              <button>자주묻는질문</button>
              <button>1:1 문의</button>
            </div>
          </article>
        </section>
      </div>
    </footer>
  );
}
export default Footer;
