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
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

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
          return fetch("../data.json")
            .then((response) => response.json())
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        },
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => {
          return fetch("../data.json")
            .then((response) => response.json())
            .catch((error) => {
              console.error("Error fetching data:", error);
              return { error: "Failed to fetch data" };
            });
        },
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
    </AuthProvider>
  </StrictMode>
);
