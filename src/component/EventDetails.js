import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventsData from "../data/eventsData.json"


const EventDetails = () => {
  const { id } = useParams();
  const parsedId = id.replace(':', '');
  const navigate = useNavigate(); 

  console.log("Event ID from URL:", parsedId);
  
  
  const event = eventsData.find((e) => e.id === parseInt(parsedId));

  console.log("Found Event:", event);

 
  const [availableSeats, setAvailableSeats] = useState(event ? event.availableSeats : 0);

  const handleBooking = () => {
    if (availableSeats > 0) {
      setAvailableSeats(availableSeats - 1); 
      alert(`You have successfully booked a ticket for "${event.title}"!`);
    } else {
      alert("This event is fully booked.");
    }
  };
  

  const handleBack = () => {
    navigate("/book-my-event");
  };
  const eventImages = {
    1: require('../assets/tech-conference.jpg'),
    2: require('../assets/art-workshop.png'),
    3: require('../assets/holi-celebration.jpg'),
    4: require('../assets/music.jpg')
   
  };

  
  if (!event) {
    return <p>Event not found!</p>;
  }
 
  return (
    <div className="eventdetails-img-container">
      <img src={eventImages[event.id] || eventImages[1]} alt={event.title} />
      <div>
      <h1>{event.title}</h1>
      <p>{event.description}<br/>
      Category: {event.category}<br/>
      Date: {event.date}<br/>
      Available Seats: {availableSeats}<br/>
      Price: ${event.price}</p>
      <button className="btn btn-primary" onClick={handleBooking}>Book Ticket</button>
      <button className="btn btn-primary" onClick={handleBack}>Back to Event List</button>
      </div>
    </div>
  );
};

export default EventDetails;
