import React, { useEffect } from "react";
import review5Img from "../assets/review-5.jpg";
import review3Img from "../assets/review-3.jpg";
import review7Img from "../assets/review-7.jpg";
import review8Img from "../assets/review-8.jpg";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientReview = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-10 bg-gray-100 px-4 md:px-8 lg:px-16 dark:bg-gray-800 dark:text-white">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold py-2 md:py-4">
          What Our Happy <span className="text-pink-500">Clients</span> Say
          About Us
        </h1>
        <p className="text-gray-600 text-sm md:text-base dark:text-white">
          See what our users say about finding exciting events effortlessly with
          Event Explorer's smart platform.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Item 1 */}
        <div data-aos="fade-up" className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <div>
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={review5Img}
              alt=""
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Maria Khan</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
              <p className="text-xs text-gray-600 mt-2 dark:text-white">
                Event Explorer is a sleek, user-friendly platform that makes
                discovering, exploring, and attending events effortless and
                visually engaging.
              </p>
            </blockquote>
            <p className="flex justify-center items-center py-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div data-aos="fade-up" className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <div>
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={review3Img}
              alt=""
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Ashik Chowdhury</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
              <p className="text-xs text-gray-600 mt-2 dark:text-white">
                Event Explorer simplifies finding local events with an intuitive
                interface, fast performance, and vibrant design—perfect for
                staying socially active.
              </p>
            </blockquote>
            <p className="flex justify-center items-center py-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div data-aos="fade-up" className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <div>
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={review7Img}
              alt="Doctors"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Rubel Biswas</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
              <p className="text-xs text-gray-600 mt-2 dark:text-white">
                Event Explorer offers a seamless experience with real-time
                updates, stunning visuals, and easy navigation to discover
                exciting events nearby.
              </p>
            </blockquote>
            <p className="flex justify-center items-center py-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div data-aos="fade-up" className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm dark:bg-gray-800 dark:border dark:border-white">
          <div>
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={review8Img}
              alt="Doctors"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Jahangir Alom</p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
              <p className="text-xs text-gray-600 mt-2 dark:text-white">
                Event Explorer is a fantastic tool that connects users to local
                events quickly, with a clean design and smooth user experience.
              </p>
            </blockquote>
            <p className="flex justify-center items-center py-3">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
