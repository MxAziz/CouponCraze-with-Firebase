import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/pages/Home';
import Brands from './components/pages/Brands';
import MyProfile from './components/pages/MyProfile';
import AboutDev from './components/pages/AboutDev';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => {
          return fetch("/data.json")
            .then((response) => response.json())
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        },
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
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
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
