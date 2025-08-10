import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const images = [
    "https://i.ibb.co/8nBHFKHZ/plant-24.jpg",
    "https://i.ibb.co/Y7Qg4SW2/plant-21.webp",
    "https://i.ibb.co/cSB2qN7T/donation-21.jpg",
    "https://i.ibb.co/5xrfkgR6/donation-22.jpg",
    "https://i.ibb.co/QFpGGfrQ/cleacup-22.jpg",
    "https://i.ibb.co/BH5D1Rxt/cleacup-21.jpg",
  ];
  return (
    <section className="bg-gray-100 py-10  px-4 md:px-8 lg:px-16 dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl md:text-2xl  lg:text-3xl font-bold text-center mb-6">
         Our Gallery
      </h2>
      <p className="text-sm md:text-base text-center px-4 md:px-10 lg:px-20 py-4 md:pb-8 lg:pb-12">The Gallery section of Better Work showcases inspiring moments from social development events, capturing community efforts, volunteer actions, and impactful change through powerful, engaging visuals.</p>
   <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div data-aos="fade-up"
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Tree Plantation ${index + 1}`}
              className="w-full h-60 object-cover dark:border-2 dark:border-white dark:rounded-2xl"
            />
          </div>
        ))}
      </div>
   </div>
    </section>
  );
};

export default Gallery;
