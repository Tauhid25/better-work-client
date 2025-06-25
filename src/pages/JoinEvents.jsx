import React, { Suspense, use } from "react";
import JoinEventsContainer from "../components/JoinEventsContainer";
import { joinEventsPromise } from "../api/joinEventsApi";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import Loading from "./Loading";

const JoinEvents = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Better Work | Join Events</title>
      </Helmet>
      <Suspense fallback={Loading}>
        <JoinEventsContainer
          joinEventsPromise={joinEventsPromise(user.email, user.accessToken)}
        ></JoinEventsContainer>
      </Suspense>
    </div>
  );
};

export default JoinEvents;
