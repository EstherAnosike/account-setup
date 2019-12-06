import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Spinner from './../../../components/UI/spinner/Spinner';


class SignInForm extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
    }

    signInChangeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    signInSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const user = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true,
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAomubHnXUo73BZ0BCsrqDJvyLBhONIZ0I', user)
            .then(res => {
                this.setState({ loading: false, })
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                console.log(err);
            });  
    }

    render() { 
        let form = (
            <form onSubmit={this.signInSubmitHandler} className="FormFields">
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input 
                        required 
                        autoFocus="autoFocus"
                        type="email" 
                        name="email" 
                        onChange={(event) => this.signInChangeHandler(event)} 
                        className="FormField__Input" 
                        placeholder="Enter your email" />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input 
                        required 
                        minLength="6"
                        type="password" 
                        name="password" 
                        onChange={(event) => this.signInChangeHandler(event)} 
                        className="FormField__Input" 
                        placeholder="Enter your password" />
                </div>
                <div className="FormField">
                    <button className="FormField__Button mr-20">Sign In</button> 
                    <Link to="/" className="FormField__Link">Create my account</Link>
                </div>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return ( 
            <div className="FormCenter">
                {form}
            </div>
        );
    }
}
 
export default SignInForm;