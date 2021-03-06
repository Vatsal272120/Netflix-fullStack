import "./Login.css";
import { useState } from "react";
import SignUp from "../SignUp/SignUp";

const Login = () => {
  const [signIn, setsignIn] = useState(false);

  return (
    <div className='login'>
      <div className='login__background'>
        <img
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
          className='login__logo'
        />
        <button className='login__button' onClick={() => setsignIn(true)}>
          Sign In
        </button>

        <div className='login__gradient'></div>
      </div>
      <div className='login__body'>
        {signIn ? (
          <SignUp />
        ) : (
          <>
            {" "}
            <h1 className='login__bodyTitle'>
              Unlimited Films, TV Programmes and more...
            </h1>{" "}
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3> Ready to watch? Enter your email to get started</h3>
            <div className='login__input'>
              <form action=''>
                <input type='email' placeholder='email address' />
                <button
                  className='login__getStarted'
                  onClick={() => setsignIn(true)}>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
