import React, { useState, useRef, useEffect } from 'react';
import './Event.scss';

// components
import EventCard from './EventCard/EventCard';

function Event() {
  // Event Data state value
  const [eventListMockData, setEventListMockData] = useState([]);

  // Event data
  // useEffect(() => {
  //   fetch('http://localhost:10010/event', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setEventListMockData(data.itemData);
  //     });
  // }, []);

  // 해당 DOM의 scrollLeft를 얻기 위해 useRef를 사용하여 DOM에 접근
  const scrollRef = useRef(null);

  // 마우스 클릭 슬라이드 이벤트를 위한 state value
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  // 드래그 시작 세팅  >> onMouseDown
  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  // 드래그 종료 세팅  >> onMouseUp, onMouseLeave
  const onDragEnd = () => {
    setIsDrag(false);
  };

  // 마우스 x값 최신화  >> onMouseMove
  const onDragMove = e => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  return (
    <div className="event-container">
      <div
        className="evnet-content"
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <div className="event-list-wrap">
          {eventListMockData.map(data => {
            return <EventCard key={data.id} eventListData={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Event;
