import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ThemeProvider>
      <AuthProvider>
        <>
          <RouterProvider router={router} />
          <ToastContainer position="top-center" autoClose={3000} />
        </>
      </AuthProvider>
    </ThemeProvider>
  </HelmetProvider>
);
