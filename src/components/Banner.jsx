import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Plant Trees, Grow Hope",
    desc: "Join hands to make our planet greener and healthier.",
    img: "https://i.ibb.co/4ZNY8DJX/plant-1.jpg",
  },
  {
    id: 2,
    title: "Clean Streets, Bright Future",
    desc: "Small actions today create a cleaner tomorrow.",
    img: "https://i.ibb.co/ccr0DzY0/road-clean.jpg",
  },
  {
    id: 3,
    title: "Protect Nature, Preserve Life",
    desc: "Together, we can build a sustainable world.",
    img: "https://i.ibb.co/HTVXGV63/plant-3.jpg",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // Auto-change every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div
      className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] w-full bg-cover bg-center bg-no-repeat rounded-lg"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/x870tDm1/paper.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-8 lg:px-16">
        {/* Left Side - Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4">
              {current.title}
            </h1>
            <p className="text-sm md:text-lg mb-6 opacity-90 pr-4">{current.desc}</p>
            <button className="bg-[#009fff] text-white px-4 py-1 rounded-lg text-sm md:text-lg hover:bg-[#007dff] cursor-pointer">Join Now</button>
          </motion.div>
        </AnimatePresence>

        {/* Right Side - Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current.img}
            src={current.img}
            alt={current.title}
            className="w-24 md:w-72 lg:w-112 h-24 md:h-40 lg:h-64 object-cover rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Banner;
