import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import AuthContext from "./AuthContext/AuthContext";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ForgetPassword from "./Forget Password/ForgetPassword";
import Details from "./Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/details/:_id",
    element: <Details></Details>,
    loader: () => fetch("news.json"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
