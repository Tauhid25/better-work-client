import React from "react";
import plantingImg from "../assets/images/planting.jpg";
import cleaningImg from "../assets/images/cleaning.jpg";
import { motion } from "framer-motion";
import SiteOverview from "../components/SiteOverview";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 px-6 sm:px-10 md:px-16 dark:bg-gray-800 dark:text-white">
      <div className="flex justify-center items-center flex-col md:flex-row gap-4 bg-white rounded-2xl shadow-lg px-6 sm:px-10 md:px-16 dark:bg-gray-800 dark:border dark:border-white dark:rounded-2xl pb-4">
        <div className="flex-1 py-4 md:py-8 lg:py-0">
          <Helmet>
            <title>Better Work | About Us</title>
          </Helmet>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Our{" "}
            <motion.span
              animate={{
                color: [" #009fff", " #FF00FF"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Mission
            </motion.span>
          </h1>
          <p className="text-sm md:text-base py-6">
            The mission of Better Work is to empower individuals and communities
            by connecting them through local social service events, encouraging
            collaboration, fostering civic responsibility, and enabling
            meaningful change through easy event creation, participation, and
            impact tracking.
          </p>
          <button className="btn bg-[#009fff] hover:bg-[#007dff] cursor-pointer text-white rounded-lg">Learn More</button>
        </div>
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={cleaningImg}
            className="hidden md:block w-40 lg:w-96 rounded-lg shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={plantingImg}
            className="hidden md:block w-40 lg:w-96 rounded-lg shadow-2xl"
          />
        </div>
      </div>

    
    <SiteOverview />
    </div>
  );
};

export default AboutUs;
