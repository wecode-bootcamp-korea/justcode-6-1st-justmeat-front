import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.scss';

function EventDetail() {
  // const location = useLocation();
  const params = useParams();
  const eventId = params.id;

  // Event Data state value
  const [eventDetailContent, setEventDetailContent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:10010/event/${eventId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        data.result.map(eventInfo => {
          setEventDetailContent(eventInfo.content);
        });
      });
  }, [params.id]);

  return (
    <div className="event-detail-contain">
      <div className="event-detail-wrap">
        <span dangerouslySetInnerHTML={{ __html: eventDetailContent }}></span>
      </div>
    </div>
  );
}

export default EventDetail;
