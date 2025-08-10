import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const AppFeature = ({ feature }) => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { title, description, ratings, thumbnail } = feature;
  return (
    <div data-aos="fade-up" className="bg-white rounded-2xl px-3 py-6 dark:bg-gray-800 dark:border dark:border-white">
      <div>
        <img
          className="w-[350px] h-[200px] rounded-lg mx-auto"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="px-8 pt-4">
        <div className="lg:flex gap-x-20">
          <p className="font-semibold text-lg">{title}</p>
          <p>Ratings : {ratings}</p>
        </div>
        <p className="py-1">{description}</p>
      </div>
    </div>
  );
};

export default AppFeature;
