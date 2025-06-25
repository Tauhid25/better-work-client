import React from "react";
import { Link } from "react-router";

const AppFeature = ({ feature }) => {
  const { title, description, ratings, thumbnail } = feature;
  return (
    <div className="bg-white rounded-2xl px-3 py-6 dark:bg-gray-800 dark:border dark:border-white hover:scale-105 transition-transform duration-300">
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
