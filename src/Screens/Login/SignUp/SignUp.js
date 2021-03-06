import { useRef } from "react";
import { auth } from "../../../firebase";
import "./SignUp.css";

const SignUp = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((e) => alert(e.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
      .then((user) => {
        console.log(user);
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className='signUp'>
      <form action=''>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passRef} type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>
          Sign In
        </button>
        <h4>
          {" "}
          <span className='signUp__grey'>New to Netflix? </span>{" "}
          <span className='signUp__link' onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
