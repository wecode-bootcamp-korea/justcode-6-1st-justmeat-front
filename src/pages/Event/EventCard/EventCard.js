import React from 'react';
import './EventCard.scss';

function EventCard({ mockData }) {
  return (
    <div className="event-wrap setting-center">
      <div className="event-img todo">
        <div className="event-tag setting-center">EVENT</div>
      </div>
      <div className="event-detail text-center">
        <p className="event-detail-title">{mockData.title}</p>
        <p className="event-detail-content">{mockData.content}</p>
      </div>
    </div>
  );
}

export default EventCard;
