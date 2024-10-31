import React, { useState, useEffect, useMemo } from "react";
import eventsData from "../data/eventsData.json";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setEvents(eventsData);
      } catch (err) {
        setError("Failed to fetch events.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [events, filter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const eventImages = {
    1: require("../assets/tech-conference.jpg"),
    2: require("../assets/art-workshop.png"),
    3: require("../assets/holi-celebration.jpg"),
    4: require("../assets/music.jpg"),
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //   if (loading) return <p>Loading...</p>;
  if (loading)
    return (
      <div class="loader-container">
        <div class="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="event-list-container">
      <h1>Event List</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div>
        {currentEvents.map((event) => (
          <div key={event.id}>
            <div className="main-event-List-container">
              <div>
                <img
                  src={eventImages[event.id] || eventImages[1]}
                  alt={event.title || "Event Image"}
                />
              </div>
              <div id="content">
                <h3>{event.title}</h3>
                <p>
                  {event.description}
                  <br />
                  Category: {event.category}
                  <br />
                  Date: {event.date}
                  <br />
                  Available Seats: {event.availableSeats}
                  <br />
                  Price: ${event.price}
                </p>
                <Link to={`/event/${event.id}`}>
                  <button
                    className="btn btn-primary"
                    aria-label={`View details for ${event.title}`}
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
    </div>
  );
};

export default EventList;
