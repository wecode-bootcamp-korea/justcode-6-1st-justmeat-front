import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Menumodal.scss';

function Menumodal({ menuOpen, setMenuOpen, logoutButtonClick, goToCart }) {
  return (
    <div className={menuOpen ? 'activate' : 'before-activate'}>
      <section className="menu-wrapper">
        <div className="menu-header">
          <div className="menu-title">메뉴</div>
          <div className="menu-header-icon-box">
            {localStorage.getItem('accessToken') !== null ? (
              <div className="menu-header-logout" onClick={logoutButtonClick}>
                로그아웃
              </div>
            ) : null}

            <FontAwesomeIcon
              icon={faCartShopping}
              className="menu-cart-icon"
              onClick={goToCart}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faX}
              className="menu-cart-icon"
              onClick={() => {
                setMenuOpen(false);
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <p className="menu-shop-text">쇼핑하기</p>
        <div className="menu-categories-container">
          <Link to="/product">
            <div className="menu-category">
              <div className="menu-category-img-box">
                <img src="/images/pig.png" alt="돼지"></img>
              </div>
              <div className="menu-category-name">돼지</div>
            </div>
          </Link>
          <div className="menu-category">
            <div className="menu-category-img-box">
              <img src="/images/cow.png" alt="소"></img>
            </div>
            <div className="menu-category-name">소</div>
          </div>
          <div className="menu-category">
            <div className="menu-category-img-box">
              <img src="/images/chicken.png" alt="닭"></img>
            </div>
            <div className="menu-category-name">닭</div>
          </div>
          <div className="menu-category">
            <div className="menu-category-img-box">
              <img src="/images/fish.png" alt="수산"></img>
            </div>
            <div className="menu-category-name">수산</div>
          </div>
          <div className="menu-category">
            <div className="menu-category-img-box">
              <img src="/images/dinner.png" alt="밀키트"></img>
            </div>
            <div className="menu-category-name">밀키트</div>
          </div>
          <div className="menu-category">
            <div className="menu-category-img-box">
              <img src="/images/milk.png" alt="우유"></img>
            </div>
            <div className="menu-category-name">우유</div>
          </div>
          <div className="menu-category">
            <div className="menu-category-img-box">
              <img src="/images/fried-egg.png" alt="달걀"></img>
            </div>
            <div className="menu-category-name">달걀</div>
          </div>
          <div className="menu-category">
            <div className="menu-category-img-box">
              <img src="/images/shopping-cart.png" alt="이유식"></img>
            </div>
            <div className="menu-category-name">이유식</div>
          </div>
        </div>
        <div className="menu-externals-container">
          <p>브랜드스토리</p>
          <p>이용가이드</p>
          <p>공지사항</p>
          <p>고객센터</p>
          <p>마이페이지</p>
        </div>
      </section>
    </div>
  );
}
export default Menumodal;
