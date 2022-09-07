import React, { useState } from 'react';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faCartShopping } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../Header/Header.scss';
import Menumodal from './Menumodal/Menumodal.js';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(localStorage.getItem('accessToken'));
  const logoutButtonClick = () => {
    localStorage.removeItem('accessToken');
  };

  return (
    <>
      <header>
        <div className="navigation-container">
          <div className="navigation-left">
            <div className="navigation-logo">
              <Link to="/">
                <img
                  src="/images/justmeat-logo-white.png"
                  alt="justmeat-logo"
                ></img>
              </Link>
            </div>
            <ul className="navigation-mainmenu">
              <li>
                <Link to="/shop" style={{ textDecoration: 'none' }}>
                  <span>쇼핑하기</span>
                </Link>
              </li>
              <li>
                <span>배송안내</span>
              </li>
              <li>
                <Link to="/event">
                  <span>이벤트</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navigation-right">
            <ul className="navigation-submenu">
              <li>공지사항</li>
              <li>고객센터</li>
            </ul>
            <div className="navigation-submenu-split"></div>

            {localStorage.getItem('accessToken') !== null ? (
              <div>
                <Link to="/sale/localStorage.getItem('user_pk')">
                  <span className="navigation-mypage">마이페이지</span>
                </Link>
              </div>
            ) : (
              <ul className="navigation-submenu">
                <Link to="/login">
                  <li>로그인</li>
                </Link>
                <Link to="/signup">
                  <li>회원가입</li>
                </Link>
              </ul>
            )}
            <div className="navigation-icons">
              <FontAwesomeIcon
                className="navigation-cart"
                icon={faCartShopping}
              />
              <FontAwesomeIcon
                className="navigation-side"
                icon={faBars}
                onClick={() => {
                  setMenuOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <Menumodal
        logoutButtonClick={logoutButtonClick}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      ></Menumodal>
    </>
  );
}

export default Header;
