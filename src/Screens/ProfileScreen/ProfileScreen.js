import React from "react";
import Navbar from "../../Components/Navbar";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectuser } from "./../../features/userSlice";
import { auth } from "../../firebase";

const ProfileScreen = () => {
  const user = useSelector(selectuser);
  return (
    <div className='profileScreen'>
      <Navbar />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            className='profileScreen__info__image'
            src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
            alt=''
          />
          <div className='profileScreen__details'>
            <h2 className='profileScreen__deatils__email'>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3 className='profileScreen__plans__type'>Plans</h3>
              <p className='profileScreen__plans__renewal'>renewal date</p>
              <button
                className='profileScreen__signOut'
                onClick={() => auth.signOut()}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
