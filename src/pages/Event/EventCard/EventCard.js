import React from 'react';
import './EventCard.scss';

function EventCard({ eventListData }) {
  return (
    <div className="event-wrap setting-center">
      <div className="event-img-wrap todo">
        <div className="event-tag setting-center">EVENT</div>
      </div>
      <div className="event-detail text-center">
        <p className="event-detail-title">{eventListData.title}</p>
        <p className="event-detail-content">{eventListData.content}</p>
      </div>
    </div>
  );
}

export default EventCard;
