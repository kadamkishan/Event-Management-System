import React from "react";
import EventCard from "../../components/EventCard/EventCard";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import "./EventList.css";

const EventList = () => {
  const renderEventCards = () => {
    return eventList.map(({ id, date, eventName, category, description, locality }) => (
      <EventCard
        key={id}
        id={id}
        date={date}
        eventName={eventName}
        category={category}
        description={description}
        locality={locality}
      />
    ));
  };

  return (
    <div>
      <Navigation />
      <div className="event-list-wrapper">
        {eventList.length > 0 ? (
          <div className="event-list">{renderEventCards()}</div>
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
