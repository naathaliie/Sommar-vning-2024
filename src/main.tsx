import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import OrderPage from "./routes/OrderPage/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/orders",
    element: <OrderPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
