import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Login from './components/Login';
import Wishlist from './components/Wishlist';


function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/wishlist" component={Wishlist}/>
                <Route exact path="/contact-us" component={ContactUs}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </Router>
    )
}

export default Routes
