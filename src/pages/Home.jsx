import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import AppFeatures from "../components/AppFeatures";
import Newsletter from "../components/NewsLetter";
import { Helmet } from "react-helmet-async";
import SuccessSection from "../components/SuccessSection";
import ClientReview from "../components/ClientReview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Better Work | Home</title>
      </Helmet>
      <Banner />
      <AppFeatures />
      <Gallery />
      <SuccessSection />
      <ClientReview />
      <Newsletter />
    </div>
  );
};

export default Home;
