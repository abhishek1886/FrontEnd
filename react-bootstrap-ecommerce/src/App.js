import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AvailableItems from "./Components/Layout/AvailableItems";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/store', element: <AvailableItems />},
      { path: '/about', element: <AboutPage />},
      { path: '/home', element: <HomePage />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
