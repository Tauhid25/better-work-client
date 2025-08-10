import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ManageEventsList = ({ manageEventsPromise }) => {
  const userEvents = use(manageEventsPromise);
  const [events, setSetEvents] = useState(userEvents);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#009fff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/events/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete response:", data);
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your event has been removed.", "success");
              const remainingEvent = events.filter((event) => event._id !== id);
              setSetEvents(remainingEvent);
            }
          })
          .catch((error) => {
            console.log("Error deleting event:", error);
          });
      }
    });
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-8 bg-gray-50  dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Manage{" "}
        <motion.span
          animate={{
            color: [" #009fff", " #FF00FF"],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          Events
        </motion.span>
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl dark:bg-gray-800 dark:text-white dark:border dark:border-white">
        <table className="min-w-full text-sm md:text-base">
          <thead className="bg-blue-100 text-gray-700 dark:bg-gray-800 dark:text-white">
            <tr>
              <th className="p-3 text-left">SN</th>
              <th className="p-3 text-left">Event Name</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? (
              events.map((event, index) => (
                <tr key={event._id} className="border-t">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{event.title}</td>
                  <td className="p-3">{event.location}</td>
                  <td className="p-3 font-semibold  dark:text-white">
                    {event.eventDate}
                  </td>
                  <td className="p-3 space-x-2">
                    <Link to={`/update-event/${event._id}`}>
                      <button className="px-3 py-1 bg-[#009fff] hover:bg-[#007dff] text-white rounded-md cursor-pointer">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="px-3 py-1 my-2 bg-[#FF00FF] hover:bg-red-600 text-white rounded-md cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-4 text-center text-gray-500 font-medium"
                >
                  You haven't posted any events yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEventsList;
