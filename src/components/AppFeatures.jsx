import React from "react";
import { useLoaderData } from "react-router";
import AppFeature from "./AppFeature";

const AppFeatures = () => {
  const featuresData = useLoaderData() || [];
   

  return (
    <div className="w-full dark:bg-gray-800 dark:text-white">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 sm:px-6 md:px-8 lg:px-16 py-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-3">
          Explore Our Main Features
        </h1>
        <p className="text-center text-gray-600 dark:text-white mb-8 sm:mb-10 max-w-6xl mx-auto text-sm sm:text-base">
          Better Work highlights powerful tools designed to streamline event
          planning, boost engagement, track impact, and empower communities
          through accessible, user-friendly social development solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
            <AppFeature feature={feature} key={feature._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
