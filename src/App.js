import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Account from './containers/account/Account';
import Dashboard from './components/dashboard/Dashboard';
// import Maintenance from './components/maintenance/Maintenance'; 

class App extends Component {
  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          {/* <Route path="/request-maintenance" component={Maintenance} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Account} />
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;
