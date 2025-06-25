import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  return (
    <div>
      <div className="bg-gray-100 px-4 md:px-12 lg:px-16 py-4 md:py-6 dark:bg-gray-800 dark:text-white">
        <div>
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Autoplay]}
            speed={3000}
            className="relative"
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  className="rounded-lg w-full h-80 md:h-96 lg:h-160"
                  src="https://i.ibb.co/4ZNY8DJX/plant-1.jpg"
                  alt="Slide 1"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white rounded-lg">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center">
                    Plant Trees for a Greener Future.
                  </h2>
                  <p className="text-sm md:text-base my-4 px-4 md:px-20 lg:px-60 text-justify">
                    Tree plantation improves air quality, combats climate
                    change, supports wildlife and healthy living, enhances
                    biodiversity, reduces soil erosion, provides shade, cools
                    urban areas, beautifies landscapes, and boosts mental
                    well-being.
                  </p>
                  <button className="btn text-white bg-[#009fff] hover:bg-[#007dff]">
                    Join Us
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative">
                <img
                  className="rounded-lg w-full h-80 md:h-96 lg:h-160"
                  src="https://i.ibb.co/ccr0DzY0/road-clean.jpg"
                  alt="Slide 2"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white rounded-lg">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center">
                    Cleaning Roads, Building Better Communities
                  </h2>
                  <p className="text-sm md:text-base my-4 px-4 md:px-20 lg:px-60 text-justify">
                    Volunteers unite to clean roads, promoting community pride,
                    environmental care, and social responsibility through
                    service, fostering teamwork, reducing pollution, enhancing
                    safety, inspiring others, and creating lasting positive
                    impact.
                  </p>
                  <button className="btn text-white bg-[#009fff] hover:bg-[#007dff]">
                    Join Us
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative">
                <img
                  className="rounded-lg w-full h-80 md:h-96 lg:h-160"
                  src="https://i.ibb.co/HTVXGV63/plant-3.jpg"
                  alt="Slide 3"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white rounded-lg">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center">
                    Plant Trees, Protect Nature, Preserve Future.
                  </h2>
                  <p className="text-xs md:text-base my-4 px-4 md:px-20 lg:px-60 text-justify">
                    Tree plantation purifies air, conserves soil, supports
                    wildlife, reduces heat, and fights climate change, improves
                    mental health, provides shelter, enhances beauty, restores
                    ecosystems, and promotes sustainability.
                  </p>
                  <button className="btn text-white bg-[#007fff] hover:bg-[#007dff]">
                    Join Us
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
