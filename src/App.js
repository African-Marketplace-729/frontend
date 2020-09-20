import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';

import Register from './components/Register';
import Signin from './components/Signin';
import './App.css';

function App() {
  return (
    <div className="App">
      African Marketplace 
      {/* Delete <br> and <hr> when styling */}
      <br/><br/><hr/><br/>
      <Switch>
        <Route path='/signin' component={Signin} />
        <Route path='/register' component={Register} />
        <Route path='/' component={Register} />
      </Switch>
      
      {/* Delete <br> and <hr> when styling.  */}

      {/* Move Links to other components when */}
      {/* the components are completed.       */}
      
      <br/><hr/><br/>
      <Link to='/signin'>Already have an account?</Link>
      <br/><br/><hr/><br/>
      <Link to='/register'>Create an account.</Link>
    </div>
  );
}

export default App;
