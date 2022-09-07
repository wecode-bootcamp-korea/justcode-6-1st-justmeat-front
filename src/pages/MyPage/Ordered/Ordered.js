import './Ordered.scss';
import { useEffect, useState } from 'react';
import OrderedList from './OrderedList';

function Ordered() {
  const [mypageData, setMypageData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:10010/sale/${localStorage.getItem('user_pk')}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setMypageData(data.data);
      });
  }, []);

  return (
    <div className="mypage-ordered-wrapper">
      <div className="mypage-ordered-head">
        <div className="mypage-ordered-head-info">상품정보</div>
        <div className="mypage-ordered-head-amount">수량</div>
        <div className="mypage-ordered-head-price">가격</div>
      </div>

      {mypageData.map((mypage, i) => {
        return <OrderedList key={i} mypage={mypage} />;
      })}
    </div>
  );
}
export default Ordered;
