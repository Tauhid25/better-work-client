import React, { useEffect } from "react";
import plantationImg from "../assets/plantation.png";
import cleanupImg from "../assets/cleanup.png";
import donationImg from "../assets/donation.png";
import donorImg from "../assets/donor.png";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const SuccessSection = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-10 bg-gray-100 px-4 md:px-8 lg:px-16 dark:bg-gray-800 dark:text-white">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold py-2 md:py-4">
          Our Achievements
        </h1>
        <p className="text-gray-600 text-sm md:text-base dark:text-white">
          Our Achievements: Successfully connected communities, hosted impactful events, inspired volunteers, and fostered lasting social change through collaborative efforts and dedication.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Item 1 */}
        <div data-aos="fade-up" className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <img
            className="w-20 h-20 mb-4"
            src={plantationImg}
            alt="Doctors"
          />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={199} duration={4} />+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">
            Plantation
          </p>
        </div>

        {/* Item 2 */}
        <div data-aos="fade-up" className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <img
            className="w-20 h-20 mb-4 dark:bg-gray-800 dark:border dark:border-white"
            src={cleanupImg}
            alt="Reviews"
          />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={267} duration={4} />+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">
            Cleanup
          </p>
        </div>

        {/* Item 3 */}
        <div data-aos="fade-up" className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <img
            className="w-20 h-20 mb-4"
            src={donationImg}
            alt="Patients"
          />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={399} duration={4} />+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">Donations</p>
        </div>

        {/* Item 4 */}
        <div data-aos="fade-up" className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <img className="w-20 h-20 mb-4 " src={donorImg} alt="Staffs" />
          <p className="text-4xl font-bold text-blue-700 dark:text-white">
            <CountUp end={487} duration={4} />+
          </p>
          <p className="text-lg font-medium text-gray-600 mt-2 dark:text-white">Blood Camp</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
