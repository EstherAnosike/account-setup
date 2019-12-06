import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './Account.css';
import SignUpForm from './signUp/SignUpForm';
import SignInForm from './signIn/SignInForm';

class Account extends Component {
    render() { 
        return ( 
            <div className="Account">
                <div className="Account__Aside"></div>
                <div className="Account__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>

                    <div className="FormTitle">
                        <NavLink 
                            to="/sign-in" 
                            activeClassName="FormTitle__Link--Active" 
                            className="FormTitle__Link">Sign In
                        </NavLink> or
                        <NavLink 
                            exact 
                            to="/" 
                            activeClassName="FormTitle__Link--Active" 
                            className="FormTitle__Link">Sign Up
                        </NavLink>
                    </div>
                    <Switch>
                        <Route path="/sign-in" component={SignInForm} />
                        <Route exact path="/" component={SignUpForm} /> 
                    </Switch>
                </div>
            </div>
        );
    }
}
 
export default Account;