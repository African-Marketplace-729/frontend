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


function App() {
  return (
    <div className="App">
      <h1>African Marketplace</h1>
      {/* Delete <br> and <hr> when styling */}
      <br />
      <br />
      <hr />
      <br />
      <Switch>
        <PrivateRoute path="/profile" component={UserProfile} />
        <PrivateRoute path="/pricecheck" component={InitialListings} />
        <PrivateRoute path="/listings" component={Listings} />
        <PrivateRoute path="/addlisting" component={AddListing} />
        <PrivateRoute path="/confirm" component={ConfirmPassword} />
        <Route path="/signin" component={Signin} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Register} />
      </Switch>

      {/* <AddListing />
      <UserProfile />
      
       */}
      {/* <UserProfileCreation /> */}
    </div>
  );
}

export default App;
