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
import UpdateCompany from './pages/UpdateCompany/UpdateCompany';
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
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/company-listing/:location/:industry" component={CompanyListing}/>
            <Route path="/company-details/" component={CompanyDetails}/>
            <Route path="/create-company/" component={CreateCompany}/>
            <Route path="/update-company/" component={UpdateCompany}/>
            <Route path="/privacy-policy" component={PrivacyPolicy}/>
            <Route path="/" component={NotFound}/>
          </Switch>
        </Router>
        <Footer/>
      </div>
    </>
  )
}

export default App;
