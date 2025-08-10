import React from "react";

const Newsletter = () => {
  return (
    <div className="py-10 bg-gray-100 px-4 md:px-8 lg:px-16 dark:bg-gray-800 dark:text-white">
      <div className="bg-white dark:bg-gray-800 dark:text-white dark:border dark:border-white px-6 py-12 rounded-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold  mb-4">
          🌱 Stay Updated with Better Work
        </h2>
        <p className=" mb-6">
          Subscribe to receive the latest updates on Better Work events,
          tips, and stories.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-xl border border-[#009fff] dark:border-white focus:outline-none focus:ring-2 focus:ring-[#007dff] dark:focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-[#009fff] hover:bg-[#007dff] text-white px-6 py-3 rounded-xl transition duration-300 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
