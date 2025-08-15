import React from "react";

const sponsors = [
  // Local brands
  { name: "Grameenphone", logo: "https://i.ibb.co.com/Hf2BK2Xw/grameen.png" },
  { name: "bKash", logo: "https://i.ibb.co.com/7hBgyM2/bkash.png" },
  { name: "Robi", logo: "https://i.ibb.co.com/HTystkGL/airtel.png" },
  { name: "Airtel BD", logo: "https://i.ibb.co.com/5XfgPy5n/neslay.png" },
  // International brands
  { name: "Unilever", logo: "https://i.ibb.co.com/BmFtn1B/pepsi.png" },
  { name: "Nestlé", logo: "https://i.ibb.co.com/Z6v865Qx/robi.png" },
  { name: "Pepsi", logo: "https://i.ibb.co.com/jPvvsZ5P/Uniliver.jpg" },
];

const Sponsors = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16 dark:bg-gray-800 dark:text-white">
      <div className="mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
          Our Sponsors & Partners
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We are proud to be supported by leading local and international
          organizations committed to creating a better world.
        </p>

        {/* Marquee Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-10">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 w-40 h-36 flex items-center justify-center"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            width: calc(200%); /* Duplicate sponsor list for smooth loop */
          }
        `}
      </style>
    </section>
  );
};

export default Sponsors;


