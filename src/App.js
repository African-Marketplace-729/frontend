import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import Register from "./components/Register";
import Signin from "./components/Signin";
import AddListing from "./components/AddListing";
import UserProfile from "./components/UserProfile";
import Listings from "./components/Listings";
import InitialListings from "./components/InitialListings";
import UserProfileCreation from "./components/UserProfileCreation";
import ConfirmPassword from "./components/ConfirmPassword";

import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/profile">
          <Header />
          <UserProfile />
        </PrivateRoute>
        <PrivateRoute path="/createprofile">
          <Header />
          <UserProfileCreation />
        </PrivateRoute>
        <PrivateRoute path="/pricecheck">
          <Header />
          <InitialListings />
        </PrivateRoute>
        <PrivateRoute path="/listings">
          <Header />
          <Listings />
        </PrivateRoute>
        <PrivateRoute path="/addlisting">
          <Header />
          <AddListing />
        </PrivateRoute>
        <PrivateRoute path="/confirm">
          <Header />
          <ConfirmPassword />
        </PrivateRoute>

        <Route path="/signin" component={Signin} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
