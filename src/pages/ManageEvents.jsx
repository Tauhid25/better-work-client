import React, { Suspense, use } from "react";
import { AuthContext } from "../context/AuthContext";
import ManageEventsList from "../components/ManageEventsList";
import { manageEventsPromise } from "../api/manageEventsApi";
import { Helmet } from "react-helmet-async";
import Loading from "./Loading";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  console.log("Token in ManageEvents:", user);
  return (
    <div>
      <Helmet>
        <title>Better Work | Manage Events</title>
      </Helmet>
      <Suspense fallback={Loading}>
        <ManageEventsList
          manageEventsPromise={manageEventsPromise(
            user.email,
            user.accessToken
          )}
        ></ManageEventsList>
      </Suspense>
    </div>
  );
};

export default ManageEvents;
