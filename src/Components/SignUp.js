import "../Stylesheets/SignUp.css";

const SignUp = () => {
  return (
    <div className='signUp'>
      <form action=''>
        <h1>Sign In</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Sign In</button>
        <h4>
          {" "}
          <span className='signUp__grey'>New to Netflix? </span> Sign Up now.
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
