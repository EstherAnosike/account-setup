import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './Dashboard.css';

import user from './../../images/img.jpg';
import Profile from './../profile/Profile';
import QuickLinks from './../quickies/QuickLink';
import Maintenance from './../maintenance/Maintenance';


class Dashboard extends Component {
    render() { 
        return ( 
            <div>
               <div className="header">
                    <div className="logo">
                        <i className="fa fa-tachometer"></i>
                        <span>Brand Name</span>
                    </div>
                    <div>
                        <img src={ user } alt ="user-pic" />
                        <div className="dropdown">
                            <span className="dropbtn">Account <i className="fa fa-caret-down"></i></span>
                            <div className="dropdown-content">
                                <Link to="/dashboard/profile">Profile</Link>   
                                <Link to="/">Sign Out</Link>
                            </div>
                        </div>
                    </div>
                    <a href="/dashboard" className="nav-trigger"><span></span></a>
                </div>
                <div className="side-nav">
                    <div className="logo">
                        <i className="fa fa-tachometer"></i>
                        <span>Brand Name</span>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/dashboard">
                                    <span><img src={ user } alt ="user-pic" /></span>
                                    <span>Welcome back, Esther!</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/dashboard">
                                    <span><i className="fa fa-tachometer"></i></span>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <span><i className="fa fa-credit-card-alt"></i></span>
                                    <span>Pay Rent</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dashboard">
                                    <span><i className="fa fa-bolt"></i></span>
                                    <span>Buy Token</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/dashboard/request-maintenance">
                                    <span><i className="fa fa-wrench"></i></span>
                                    <span>Request Maintenance</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/profile">
                                    <span><i className="fa fa-cogs"></i></span>
                                    <span>Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="main-content">
                    <div className="title">
                        Your last login was 10/08/2019
                    </div>

                     <Switch>
                         <Route path="/dashboard/profile" component={Profile} />
                        <Route path="/dashboard/request-maintenance" component={Maintenance} />
                        <Route exact path="/dashboard"  component={QuickLinks} /> 
                    </Switch> 
                </div>
            </div>
        );
    }
}
 
export default Dashboard;