import React from 'react';

import './Profile.css';
import Button from './../UI/button/Button';
import user from './../../images/img.jpg';

const Profile = () => {
    return ( 
        <div className="Profile">
            <h2>Profile Settings</h2>
            <p>Your personal information</p>
            <div className="ProfileButton">
                <Button>Change password</Button>
                <Button>Edit profile</Button>
            </div>
           
            <div className="Pic-Row">
                <label for ="pic">Profile picture</label>
                <div className="InputContainer">
                    <img src={user} alt="user-pic" />
                </div>
            </div>
            <div className="Row">
                <label for ="firstName">First Name</label>
                <div className="InputContainer">
                    <p>Esther</p>
                </div>
            </div>
            <div className="Row">
                <label for ="lastName">Last Name</label>
                <div className="InputContainer">
                    <p>Anosike</p>
                </div>
            </div>
            <div className="Row">
                <label for ="email">Email</label>
                <div className="InputContainer">
                    <p>oluwaestiano@gmail.com</p>
                </div>
            </div>
        </div> 
    );
}
 
export default Profile;