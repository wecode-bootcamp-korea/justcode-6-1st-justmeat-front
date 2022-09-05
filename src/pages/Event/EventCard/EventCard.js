import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.scss';

function EventCard({ eventListData }) {
  // 랜덤 색상 만드는 함수
  const [randomColor, setRandomColor] = useState('black');

  const makeRandomColor = () => {
    const randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
    setRandomColor(randomColor);
  };

  // eventListData 업데이트할 때마다 랜덤색상 만들기
  useEffect(() => {
    makeRandomColor();
  }, [eventListData]);

  // go to event detail
  const usenavigate = useNavigate();
  const goToEventDetail = e => {
    console.log(e.target.className.split(' ')[1]);
    console.log(e.target.id);
  };

  //opacity: 0.7;

  return (
    <div
      className={`event-wrap ${eventListData.createdat} setting-center`}
      id={eventListData.id}
      // value={eventListData.createdat}
      onClick={eventListData.content ? goToEventDetail : null} // content 가 null 이면 onClick 함수 x
      style={{ opacity: eventListData.content ? 1 : 0.3 }} // content 가 null 이면 불투명도 0.3
    >
      <div
        className={`event-img-wrap ${eventListData.createdat} todo`}
        id={eventListData.id}
        // value={eventListData.createdat}
        onClick={eventListData.content ? goToEventDetail : null}
        style={{ backgroundImage: `url(${eventListData.titleImg})` }}
      >
        <div
          className={`event-tag ${eventListData.createdat} setting-center`}
          id={eventListData.id}
          // value={eventListData.createdat}
          onClick={eventListData.content ? goToEventDetail : null}
          style={{ backgroundColor: randomColor }}
        >
          EVENT
        </div>
      </div>
      <div
        className={`event-detail ${eventListData.createdat} text-center`}
        id={eventListData.id}
        // value={eventListData.createdat}
        onClick={eventListData.content ? goToEventDetail : null}
      >
        <p
          className={`event-detail-title ${eventListData.createdat}`}
          id={eventListData.id}
          // value={eventListData.createdat}
          onClick={eventListData.content ? goToEventDetail : null}
        >
          {eventListData.title}
        </p>
        <p
          className={`event-detail-content ${eventListData.createdat}`}
          id={eventListData.id}
          // value={eventListData.createdat}
          onClick={eventListData.content ? goToEventDetail : null}
        >
          {eventListData.subtitle}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
