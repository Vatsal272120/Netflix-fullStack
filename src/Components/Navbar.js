import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "../Stylesheets/Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <img
          onClick={() => history.push("/")}
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
          className='nav__logo'
        />
        <img
          onClick={() => history.push("/profile")}
          src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
          alt=''
          className='nav__avatar'
        />
      </div>
    </div>
  );
};

export default Navbar;
