import React from "react";
import { Helmet } from "react-helmet-async";

const Loading = () => {
  return (
    <div className="min-h-screen flex  justify-center items-center">
      <Helmet>
        <title>Better Work | Loading</title>
      </Helmet>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
};

export default Loading;
