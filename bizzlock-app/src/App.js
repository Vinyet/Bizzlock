import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CompanyListing from './pages/CompanyListing';
import SignUp from './pages/SignUp';
import './index.scss';


function App() {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route path="/company-listing">
            <CompanyListing />
          </Route> 
          <Route path="/sign-up">
            <SignUp />
          </Route> 
          <Route path="/">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
