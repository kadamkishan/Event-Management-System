import EventCard from "../EventCard/EventCard";
import { eventList } from '../../utils/EventDatabase';
import "./SearchEventList.css";

const SearchEventList = ({ selectedCategory }) => {
    const filteredEvents = eventList.filter((eventDetail) => {
        return selectedCategory ? eventDetail.category === selectedCategory : true;
    });
    

    const renderEventCards = () => {
        return filteredEvents.map(({ id, date, eventName, category, description,city,image, locality }) => {
            return (
                <EventCard
                    key={id}
                    id={id}
                    eventName={eventName}
                    date={date}
                    locality={locality}
                    city={city}
                    img={image}
                    category={category}
                    description={description}
                />
            );
        });
    };

    return (
        <>
            {filteredEvents.length > 0 ? (
                renderEventCards()
            ) : (
                <p>No Events in the selected category</p>
            )}
        </>
    );
};

export default SearchEventList;
