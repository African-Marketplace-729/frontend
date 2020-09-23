import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';

import Register from './components/Register';
import Signin from './components/Signin';
import AddListing from './components/AddListing';
import UserProfile from './components/UserProfile';
import Listings from './components/Listings';
import InitialListings from './components/InitialListings';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>African Marketplace</h1>
      {/* Delete <br> and <hr> when styling */}
      <br/><br/><hr/><br/>
      <Switch>
        <PrivateRoute path='/profile' component={UserProfile} />
        <PrivateRoute path='/pricecheck' component={InitialListings} />
        <Route path='/signin' component={Signin} />
        <Route path='/register' component={Register} />
        <Route path='/' component={Register} />
      </Switch>
      
      {/* <AddListing />
      <UserProfile />

      <Listings /> */}
    </div>
  );
}

export default App;
