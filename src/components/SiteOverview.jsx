import React from "react";
import eventImg from "../assets/icons/events.png";
import eventImg2 from "../assets/icons/events2.png";
import organizerImg from "../assets/icons/organizer.png";
import usersImg from "../assets/icons/subscriber.png";
import CountUp from "react-countup";

const SiteOverview = () => {
  return (
    <div className="py-10 bg-gray-100 px-4 md:px-8 lg:px-16 dark:bg-gray-800 dark:text-white">
      <div className="text-center mb-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold py-2 md:py-4">
          Overview of the site
        </h1>
        <p className="text-gray-600 text-sm md:text-base dark:text-white">
          We introduce the platform’s mission, connecting communities through impactful social events that promote development, collaboration, and positive change for a better future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Item 1 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white hover:scale-105 transition-transform duration-300">
          <img className="w-20 h-20 mb-4" src={eventImg2} alt="" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={199} duration={5} />+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">Available Events</p>
        </div>

        {/* Item 2 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white hover:scale-105 transition-transform duration-300">
          <img className="w-20 h-20 mb-4" src={organizerImg} alt="" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={139} duration={4} />K+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">
Event Organizers</p>
        </div>

        {/* Item 3 */}
        <div className=" bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white hover:scale-105 transition-transform duration-300">
          <img className="w-20 h-20 mb-4" src={eventImg} alt="" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={799} duration={4} />K+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">Published Events</p>
        </div>

        {/* Item 4 */}
        <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white hover:scale-105 transition-transform duration-300">
          <img className="w-20 h-20 mb-4" src={usersImg} alt="" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={8} duration={4} />M+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">Subscribers</p>
        </div>
      </div>
    </div>
  );
};

export default SiteOverview;
