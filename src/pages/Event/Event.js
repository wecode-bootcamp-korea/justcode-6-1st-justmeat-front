import React, { useState, useRef } from 'react';
import './Event.scss';

// components
import EventCard from './EventCard/EventCard';

function Event() {
  // Event mock data
  const EventMockData = [
    {
      titleImg: '',
      title: 'event title 1',
      content:
        '추석처럼 넉넉한 전상품 할인 쿠폰 4장!\n부담없이 추석 준비하세요',
    },
    {
      titleImg: '',
      title: 'event title 2',
      content: `즐거운 일상의 변화 '초신선'을\n소중한 사람에게 알려주세요!`,
    },
    {
      titleImg: '',
      title: 'event title 3',
      content: '감사의 마음을 담은\n최고의 신선함',
    },
    {
      titleImg: '',
      title: 'event title 4',
      content: '정육각 앱 설치하고\n초신선한 일상을 누려보세요!',
    },
    {
      titleImg: '',
      title: 'event title 5',
      content: '만족하신 마음을 담아\n상품 리뷰를 작성해주세요',
    },
    {
      titleImg: '',
      title: 'event title 6',
      content: '한번 배송비로\n4회 무료배송',
    },
  ];

  // 해당 DOM의 scrollLeft를 얻기 위해 useRef를 사용하여 DOM에 접근
  const scrollRef = useRef(null);

  // 마우스 클릭 슬라이드 이벤트를 위한 state value
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  // 드래그 시작 세팅
  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  // 드래그 종료 세팅
  const onDragEnd = () => {
    setIsDrag(false);
  };

  // 드래그 중 마우스 x값 최신화
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
      {/* <div> Nav */}
      <div
        className="evnet-content"
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : null}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <div className="event-list-wrap">
          {EventMockData.map((data, index) => {
            return <EventCard key={index} mockData={data} />;
          })}
        </div>
      </div>
      {/* <div> Footer */}
    </div>
  );
}

export default Event;
