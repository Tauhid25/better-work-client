import axios from "axios";
import React, { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";

const EventDetails = () => {
  const { user } = use(AuthContext);
  const eventData = useLoaderData();
  const { _id, ...eventWithoutId } = eventData;
  eventWithoutId.currentUserEmail = user.email;
  

  const navigate = useNavigate();

  const handleJoinEvent = () => {
    axios
      .post("http://localhost:3000/joinEvents", eventWithoutId)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Congratulation!",
            text: "You have successfully reserved a seat for this event!",
            icon: "success",
          });
          navigate("/joined-events");
        }
      })
      .catch((error) => {
        console.error("Error submitting task:", error);
        Swal.fire({
          icon: "error",
          title: "Attention !!",
          text: "You have already reserved a seat for joining this event.",
        });
      });
  };

  const {
    name,
    photo,
    title,
    thumbnail,
    description,
    location,
    eventDate,
    eventType,
  } = eventData || {};
  return (
    <div className=" bg-gray-100 dark:bg-gray-800 dark:text-white pb-4 md:py-8 ">
      <div className="bg-white dark:bg-gray-800 mx-4 px-4 py-4 space-y-4 md:px-8 md:py-6 md:mx-12 md:space-y-8 lg:flex lg:mx-16 lg:px-6 lg:py-10 lg:gap-x-8 rounded-2xl dark:border dark:border-white">
        <Helmet>
          <title>Better Work | Event Details</title>
        </Helmet>
        <div className="lg:w-6/12">
          <img
            className="w-full mx-auto rounded-lg h-40 md:h-80 lg:h-96"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="lg:w-6/12">
          <div className="px-6 mx-auto">
            <h1 className="text-xl md:2xl lg:text-3xl font-bold">{title} </h1>
            <div className="flex flex-col md:flex-row lg:items-center gap-x-4 pt-6">
              <p className="flex items-center gap-x-2">
                <FaMapMarkerAlt /> {location}
              </p>
              <p className="flex items-center gap-x-2">
                {" "}
                <FaCalendarAlt /> {eventDate}
              </p>
              <p>Category : {eventType}</p>
            </div>
            <p className="py-4">Description : {description}</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-x-4 px-6 pt-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4 gap-y-3 mt-2 dark:border dark:border-white dark:p-2 dark:rounded-lg">
              <img src={photo} alt={name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-sm dark:text-white">Author</p>
              </div>
            </div>
            <div className="divider divider-horizontal mb-3"></div>
            <button
              onClick={handleJoinEvent}
              className="btn lg:w-[40%] bg-[#009fff] text-white rounded-lg text-lg py-4 hover:bg-[#007dff] transition"
            >
              Join Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;


