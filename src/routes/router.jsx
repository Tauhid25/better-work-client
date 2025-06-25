import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Loading from "../pages/Loading";
import UpcomingEvents from "../pages/UpcomingEvents";
import CreateEvent from "../pages/CreateEvent";
import ManageEvents from "../pages/ManageEvents";
import JoinedEvents from "../pages/JoinEvents";
import EventDetails from "../pages/EventDetails";
import AboutUs from "../pages/AboutUs";
import UpdateEvent from "../pages/UpdateEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () =>
          fetch("https://better-work-server.vercel.app/appFeatures"),
        Component: Home,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/upcoming-events",
        loader: () => fetch("https://better-work-server.vercel.app/events"),
        Component: UpcomingEvents,
      },
      {
        path: "/event-details/:id",
        loader: ({ params }) =>
          fetch(`https://better-work-server.vercel.app/events/${params.id}`),
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events",
        element: (
          <PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "/joined-events",
        element: (
          <PrivateRoute>
            <JoinedEvents></JoinedEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-event/:id",
        loader: ({ params }) =>
          fetch(`https://better-work-server.vercel.app/events/${params.id}`),
        Component: UpdateEvent,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
