import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    title: "",
    thumbnail: "",
    eventType: "",
    description: "",
    eventDate: null,
    location: "",
  });

  const eventTypes = ["Plantation", "Cleanup", "Donation"];

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, eventDate: date }));
  };

  const isValidURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Input Validation
    if (formData.title.length < 5 || formData.title.trim() === "") {
      return Swal.fire(
        "Invalid Title",
        "Title must be at least 5 characters.",
        "warning"
      );
    }
    if (!formData.thumbnail.trim() || !isValidURL(formData.thumbnail)) {
      return Swal.fire(
        "Invalid URL",
        "Please provide a valid thumbnail URL.",
        "warning"
      );
    }
    if (!formData.eventType) {
      return Swal.fire(
        "Missing Type",
        "Please select an event type.",
        "warning"
      );
    }
    if (formData.description.length < 10) {
      return Swal.fire(
        "Invalid Description",
        "Description must be at least 10 characters..",
        "warning"
      );
    }
    if (!formData.eventDate || new Date(formData.eventDate) < new Date()) {
      return Swal.fire(
        "Invalid Date",
        "Please choose a valid future date.",
        "warning"
      );
    }
    if (formData.location.length < 10) {
      return Swal.fire(
        "Invalid Location",
        "Location must be at least 10 characters.",
        "warning"
      );
    }

    const formattedDate = formData.eventDate.toLocaleDateString("en-CA");

    fetch("https://better-work-server.vercel.app/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        eventDate: formattedDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success", "You have added a new event!", "success");
          navigate("/upcoming-events");
          setFormData({
            email: user.email || "",
            title: "",
            thumbnail: "",
            eventType: "",
            description: "",
            eventDate: null,
            location: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error submitting event:", error);
        Swal.fire(
          "Error",
          "Something went wrong while adding the event!",
          "error"
        );
      });
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 md:px-8 lg:px-0 dark:bg-gray-800 dark:text-white">
      <Helmet>
        <title>Better Work | Create Event</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-6xl mx-auto p-6 sm:p-8 rounded-xl shadow space-y-4 dark:bg-gray-800 dark:text-white dark:border dark:border-white"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          Create{" "}
          <motion.span
            animate={{
              color: ["#009fff", "#FF00FF"],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
            Event
          </motion.span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">User Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100 text-sm dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
              placeholder="Event title"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Event Thumbnail
            </label>
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
              placeholder="Event Thumbnail URL"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Event Type</label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm dark:bg-gray-800 dark:text-white"
              required
            >
              <option value="">Select Type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            placeholder="Event details"
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Event Date</label>
            <DatePicker
              selected={formData.eventDate}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              className="w-full border px-3 py-2 rounded text-sm dark:bg-gray-800 dark:text-white"
              placeholderText="Select a date"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
              placeholder="Location"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#009fff] text-white py-2 rounded hover:bg-[#007dff] transition text-sm sm:text-base"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
