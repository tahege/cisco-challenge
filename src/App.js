import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './pages/home/home'
import { Customers } from './pages/customers/customers'
import { Customer } from './pages/customer/customer'
import './App.css';

function CustomerPage(props) {
  return (
    <Customer id={props.match.params.customerId} />
  )
}

function App() {
  return (
    <Router>
      <div className='nav'>
        <Link to='/'>Home</Link> | <Link to='/customers'>Customers</Link>
      </div>
      <Switch>
        <Route path="/customers/:customerId" component={CustomerPage}/>
        <Route path="/customers">
          <Customers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
