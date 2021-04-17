import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Login from './components/Login';
import Photos from './components/Photos';
import Policy from './components/Policy';
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
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/photos" component={Photos}/>
                <Route exact path="/our-return-exchange-policy" component={Policy}/>

            </Switch>
        </Router>
    )
}

export default Routes
