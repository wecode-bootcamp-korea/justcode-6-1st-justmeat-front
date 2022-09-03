import React, { useState } from 'react';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faCartShopping } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Header/Header.scss';
import Menumodal from './Menumodal.js';
import { faL } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="navigation-container">
          <div className="navigation-left">
            <div className="navigation-logo">
              <p>로고</p>
            </div>
            <ul className="navigation-mainmenu">
              <li>
                <span>쇼핑하기</span>
              </li>
              <li>
                <span>배송안내</span>
              </li>
              <li>
                <span>이벤트</span>
              </li>
            </ul>
          </div>
          <div className="navigation-right">
            <ul className="navigation-submenu">
              <li>공지사항</li>
              <li>고객센터</li>
            </ul>
            <div className="navigation-submenu-split"></div>
            <ul className="navigation-submenu">
              <li>로그인</li>
              <li>회원가입</li>
            </ul>
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
      <Menumodal menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menumodal>
    </>
  );
}

export default Header;
