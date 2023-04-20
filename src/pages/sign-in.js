import "./sign-in.css";

const SignIn = () => {
  return (
    <div className="sign-in" >
      <div className="right-side" />
      <div className="left-side1" />
      <b className="board1">Board.</b>
      <form className="login-form">
        <div className="card14">
          <div className="card15" />
        </div>
        <div className="input-field">
          <input className="input-field1" type="text" />
        </div>
        <input className="input" type="text" />
        <div className="div14">••••••••</div>
        <div className="login-form-child" />
        <button className="button-sign-in">
          <div className="button-primary">
            <button className="button-primary1" />
          </div>
          <b className="sign-in1">Sign In</b>
        </button>
        <div className="email-address">Email address</div>
        <div className="johndoegmailcom">johndoe@gmail.com</div>
        <div className="password">Password</div>
        <div className="forgot-password">Forgot password?</div>
        <div className="dont-have-an-container">
          <span className="dont-have-an">{`Don’t have an account? `}</span>
          <span className="register-here">Register here</span>
        </div>
      </form>
      <button className="google-sign-in">
        <div className="white1">
          <button className="button1" />
        </div>
        <div className="sign-in-with">Sign in with Google</div>
        <img className="google-icon-1" alt="" src="/googleicon-1.svg" />
      </button>
      <button className="apple-sign-in">
        <button className="white2">
          <button className="button2" />
        </button>
        <div className="sign-in-with1">Sign in with Apple</div>
        <img className="apple-1-icon" alt="" src="/apple-1.svg" />
      </button>
      <b className="sign-in2">Sign In</b>
      <div className="sign-in-to">Sign in to your account</div>
    </div>
  );
};

export default SignIn;
