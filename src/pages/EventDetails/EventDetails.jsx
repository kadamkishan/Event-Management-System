import React from "react";
import { useParams } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./EventDetails.css";

import PlaceImage from '../../assets/image.png'

const EventDetails = () => {
  const { id } = useParams();
  const eventId = parseInt(id);
  const event = eventList.find((event) => event.id === eventId);

  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={PlaceImage} alt="Event" />
        <div className="event-details-content">
          <h2>{event.eventName}</h2>
          <div className="event-small-details">
            <div>
            <p className="event-date">
              Date:<MdCalendarMonth className="icon" />
              {event.date}
            </p>

            </div>
            <p className="event-location">
              <IoLocationSharp className="icon" />
              {event.city}, {event.locality}
            </p>
          </div>
          <p className="event-description">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
