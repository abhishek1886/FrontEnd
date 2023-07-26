import React from "react";
import { Route } from 'react-router-dom';

import AvailableItems from "./Components/Layout/AvailableItems";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ContactUs from "./pages/ContactUs";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/store", element: <AvailableItems /> },
//       { path: "/about", element: <AboutPage /> },
//       { path: "/home", element: <HomePage /> }
//     ]
//   }
// ]);

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route path='/home'>
        <HomePage />
      </Route>
      <Route path='/store'>
        <AvailableItems />
      </Route>
      <Route path='/about'>
        <AboutPage />
      </Route>
      <Route path='/contactus'>
        <ContactUs />
      </Route>
      <Footer />
    </React.Fragment>
  );
}

export default App;
