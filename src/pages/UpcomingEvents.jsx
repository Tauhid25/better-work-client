import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { motion } from "framer-motion";
import NoDataLottie from "../assets/lotties/NoDataFound.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  console.log('my events', events);
  // Fetch events with optional query parameters
  const fetchEvents = async (search = "", category = "All") => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/events", {
        params: {
          search: search || undefined,
          category: category !== "All" ? category : undefined,
        },
      });
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle Search Submit
  const handleSearch = (e) => {
    e.preventDefault();
    fetchEvents(searchText, selectedCategory);
    setSearchText("");
  };

  // Handle Category Filter Click
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    fetchEvents(searchText, category);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="rounded-2xl px-4 md:px-8 lg:px-16 pb-4 md:pb-6 lg:pb-8">
        <Helmet>
          <title>Better Work | Upcoming Events</title>
        </Helmet>
        <h1 className="text-2xl md:text-3xl font-bold text-center py-2 dark:text-white">
          Upcoming{" "}
          <motion.span
            animate={{
              color: ["#009fff", "#FF00FF"],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
            Events
          </motion.span>{" "}
          2025
        </h1>
        <p className="text-sm md:text-base text-center dark:text-white px-6 py-4">
          A social development event brings communities together to address issues like poverty, education, and equality, promoting inclusive growth, empowerment, and collaboration. 
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-white w-full lg:w-5/12 sm:w-80 px-4 py-2 rounded-2xl border border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white dark:border-white focus:ring-2 focus:ring-white transition"
              type="text"
              placeholder="Search event by name"
            />
            <button
              type="submit"
              className="bg-[#009fff] text-white text-lg px-6 py-2 rounded-3xl hover:bg-[#007dff] transition cursor-pointer"
            >
              Search Now
            </button>
          </div>
        </form>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {["All", "Plantation", "Cleanup", "Donation"].map((type) => (
            <button
              key={type}
              onClick={() => handleCategoryFilter(type)}
              className={`px-4 py-2 rounded-xl border ${
                selectedCategory === type
                  ? "bg-[#009fff] text-white"
                  : "bg-white text-gray-700 dark:bg-gray-800 dark:text-white dark:border-white"
              } hover:bg-[#007dff] hover:text-white transition`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events List or Loader */}
        {loading ? (
          <p className="text-center text-gray-500 dark:text-white">Loading events...</p>
        ) : events.length === 0 ? (
          <Lottie
            loop={true}
            animationData={NoDataLottie}
            className="w-56 md:w-96 mx-auto"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard event={event} key={event._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
