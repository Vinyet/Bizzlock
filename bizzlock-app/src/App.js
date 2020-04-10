import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompanyListing from './pages/CompanyListing';
import CreateCompany from './pages/CreateCompany';
import CompanyDetails from './pages/CompanyDetails';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './components/NotFound';
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
          <Route path="/company-details">
            <CompanyDetails />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route> 
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/create-company">
            <CreateCompany />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  )
}

export default App;
