import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const JoinEventsContainer = ({ joinEventsPromise }) => {
  const joinedEvents = use(joinEventsPromise);
  const [events, setEvents] = useState(joinedEvents);

  const handleCancelEvent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#009fff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/joinEvents/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete response:", data);
            if (data.deletedCount) {
              Swal.fire(
                "Cancelled!",
                "Your event has been cancelled.",
                "success"
              );
              const remainingEvent = events.filter((event) => event._id !== id);
              setEvents(remainingEvent);
            }
          })
          .catch((error) => {
            console.log("Error cancelling event:", error);

            Swal.fire(
              "Error",
              "Failed to cancel the event. Please try again.",
              "error"
            );
          });
      }
    });
  };

  return (
  <div className="bg-gray-100 dark:bg-gray-800 px-4 md:px-12 lg:px-16 pt-4 pb-8 lg:pt-6 lg:pb-12">
      <div className="">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 dark:text-white">
        Joined{" "}
        <motion.span
          animate={{
            color: [" #009fff", " #FF00FF"],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          Events
        </motion.span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event._id}
              className="bg-white dark:bg-gray-800 dark:border dark:border-white dark:text-white rounded-2xl px-3 py-6 hover:scale-105 transition-transform duration-300"
            >
              <div>
                <img
                  className="w-[350px] h-[200px] rounded-lg mx-auto"
                  src={event.thumbnail}
                  alt=""
                />
              </div>
              <div className="px-8 pt-4">
                <div className="flex gap-x-3">
                  <p className="font-semibold text-lg">{event.title}</p>
                  <p className="font-semibold text-lg">{event.eventDate}</p>
                </div>
                <p>Category : {event.eventType}</p>
                <p>Place : {event.location}</p>

                {/* Cancel Button */}

                <button
                  onClick={() => handleCancelEvent(event._id)}
                  className="w-full rounded-2xl border border-[#009fff] dark:border-white font-medium py-2 mt-2 hover:bg-[#007dff] hover:text-white transition duration-200 cursor-pointer"
                >
                  Cancel Event
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center font-medium col-span-3">
            You haven't joined any events yet.
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default JoinEventsContainer;
