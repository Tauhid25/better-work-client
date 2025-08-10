import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";

const isValidURL = (str) => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};

const UpdateEvent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const event = useLoaderData();

  const [formData, setFormData] = useState({
    email: "",
    title: "",
    thumbnail: "",
    eventType: "",
    description: "",
    eventDate: "",
    location: "",
  });

  const eventTypes = ["Plantation", "Cleanup", "Donation"];

  useEffect(() => {
    if (event && user) {
      setFormData({
        email: user.email || event.email || "",
        title: event.title || "",
        thumbnail: event.thumbnail || "",
        eventType: event.eventType || "",
        description: event.description || "",
        eventDate: event.eventDate || "",
        location: event.location || "",
      });
    }
  }, [event, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title.length < 5) {
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

    fetch(`http://localhost:3000/events/${event._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Updated!",
            text: "Event has been updated successfully!",
          });
          navigate("/manage-events");
        }
      })
      .catch((error) => {
        console.error("Error updating event:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while updating the event!",
        });
      });
  };

  return (
    <div className="dark:bg-gray-800 pb-4">
      <Helmet>
        <title>Better Work | Update Event</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 border rounded-xl shadow space-y-4 dark:bg-gray-800 dark:text-white"
      >
        <h2 className="text-xl font-semibold text-center">Update Event</h2>
        <div>
          <label className="block mb-1">User Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1">Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Event Thumbnail</label>
          <input
            type="url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            placeholder="Event Thumbnail"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Event Type</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white"
            required
          >
            <option value="">Select Type</option>
            {eventTypes.map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Event details"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Location"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#009fff] text-white py-2 rounded hover:bg-[#007dff] transition"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
