import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import axios from '../../../AxiosSignUps';
import Spinner from '../../../components/UI/spinner/Spinner';

import './SignUpForm.css';

class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        agreed: false,
        loading: false,
    }

    signUpChangeHandler = (event) => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name]:isCheckbox 
                ? event.target.checked
                : event.target.value
        });
    }

    signUpSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            agreed: this.state.agreed,
            returnSecureToken: true,
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAomubHnXUo73BZ0BCsrqDJvyLBhONIZ0I', user)
            .then(res => {
                this.setState({ loading: false, })
                alert("Successfully signed up!")
            })
            .catch(err => {
                console.log(err);
            });  
    }

    render() { 
        let form =(
            <form onSubmit={this.signUpSubmitHandler} className="FormFields">
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">First Name</label>
                    <input 
                        required 
                        autoFocus="autoFocus"
                        maxLength="20"
                        type="text" 
                        name="firstName" 
                        onChange={this.signUpChangeHandler} 
                        className="FormField__Input" 
                        placeholder="Enter your first name" />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Last Name</label>
                    <input 
                        required
                        maxLength="20"
                        type="text" 
                        name="lastName" 
                        onChange={this.signUpChangeHandler} 
                        className="FormField__Input" 
                        placeholder="Enter your last name" />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input 
                        required 
                        type="email" 
                        name="email" 
                        onChange={this.signUpChangeHandler} 
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
                        onChange={this.signUpChangeHandler} 
                        className="FormField__Input" 
                        placeholder="Enter your password" />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Confirm Password</label>
                    <input 
                        required 
                        minLength="6"
                        type="password" 
                        name="password" 
                        onChange={this.signUpChangeHandler} 
                        className="FormField__Input" 
                        placeholder="Confirm password" />
                </div>
                {/* <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Apartment</label>
                    <input 
                        required
                        maxLength="20"
                        type="text" 
                        name="apartment_name" 
                        onChange={this.signUpChangeHandler} 
                        className="FormField__Input" 
                        placeholder="Enter your apartment name" />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">House Number</label>
                    <input 
                        required
                        min="1"
                        max="3"
                        type="text" 
                        name="house_num" 
                        onChange={this.signUpChangeHandler} 
                        className="FormField__Input" 
                        placeholder="Enter your house number" />
                </div> */}
                <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                        <input 
                            required type="checkbox" 
                            name="agreed" 
                            onChange={this.signUpChangeHandler} 
                            className="FormField__Checkbox" /> 
                        Please check this box if you are a <Link to="/" className="FormField__TermsLink">tenant.</Link>
                    </label>
                </div>

                <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button> 
                    <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                </div>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return ( 
            <div className="FormCenter">
                {form}
            </div>
        );
    }
}
 
export default SignUpForm;