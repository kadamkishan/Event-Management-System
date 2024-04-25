import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";
import placeholderImage from "../../assets/image.png";

const EventCard = ({ id, date, eventName, category, description, locality }) => {
  const { year, month } = date;

  return (
    <Link to={`/events/${id}`} className="event-card-link">
      <div className="event-card">
        <div className="event-card-image">
          <img src={placeholderImage} alt="Event" />
        </div>
        <div className="event-card-details">
          <h3>{eventName}</h3>
          <p className="event-category">Category: {category}</p>
          <p className="event-description">{description}</p>
          <p className="event-locality">{locality}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
