import "./Login.css";

const Login = () => {
  return (
    <div className='login'>
      <div className='login__background'>
        <img
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
          className='login__logo'
        />
        <button className='login__button' onClick>
          Sign In
        </button>

        <div className='login__gradient'></div>
      </div>
    </div>
  );
};

export default Login;
