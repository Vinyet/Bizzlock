import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import CompanyListing from './pages/CompanyListing/CompanyListing';
import CreateCompany from './pages/CreateCompany/CreateCompany';
import UpdateCompany from './pages/UpdateCompany';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import SignUp from './pages/SignUp/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './components/NotFound';
import './index.scss';


function App() {
  return (
    <>
      <div className="main">
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>  
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
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
            <Route path="/update-company/:company">
              <UpdateCompany  />
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    </>
  )
}

export default App;
