import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AvailableItems from "./Components/Layout/AvailableItems";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ContactUs from "./pages/ContactUs";
import ProdcutDetail from "./pages/ProductDetail";
import AuthPage from "./pages/AuthPage"

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
      
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to="/store" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/store">
            <AvailableItems />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path='/auth'>
            <AuthPage />
          </Route>
          <Route path="/products/:productId">
            <ProdcutDetail />
          </Route>

        </Switch>
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
