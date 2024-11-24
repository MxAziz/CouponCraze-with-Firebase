import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/pages/Home";
import Brands from "./components/pages/Brands";
import MyProfile from "./components/pages/MyProfile";
import AboutDev from "./components/pages/AboutDev";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./components/ForgotPassword";
import UpdateUser from "./components/UpdateUser";
import BrandDetails from "./components/pages/BrandDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          try {
            const response = await fetch("../data.json");
            return await response.json();
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        },
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: async () => {
          try {
            const response = await fetch("../data.json");
            return await response.json();
          } catch (error) {
            console.error("Error fetching data:", error);
            return { error: "Failed to fetch data" };
          }
        },
      },
      {
        path: "/brands/:id",
        loader:()=> fetch('../data.json'),
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutDev></AboutDev>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/updateUser",
        element: <UpdateUser></UpdateUser>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        future={{ v7_skipActionErrorRevalidation: true }}
      />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="colored"
      />
    </AuthProvider>
  </StrictMode>
);
