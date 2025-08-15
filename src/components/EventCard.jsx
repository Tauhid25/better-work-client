import React from "react";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  const { _id, title, thumbnail, eventDate, eventType, location } = event;
  return (
    <div className="bg-white dark:bg-gray-800 dark:border dark:border-white dark:text-white rounded-2xl px-2 pt-8 pb-6 hover:scale-105 transition-transform duration-300">
      <div>
        <img
          className="w-[350px] h-[200px] rounded-lg mx-auto"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="px-8 pt-4">
        <div className="flex gap-x-3">
          <p className="font-semibold text-lg">{title}</p>
          <p className="font-semibold text-lg">{eventDate}</p>
        </div>
        <p>Category : {eventType}</p>
        <p>Place : {location}</p>

       
        <Link to={`/event-details/${_id}`}>
          <button className="w-full rounded-2xl border border-[#009fff] dark:border-white font-medium py-2 mt-2 hover:bg-[#007dff] hover:text-white transition duration-200 cursor-pointer">
            View Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;


