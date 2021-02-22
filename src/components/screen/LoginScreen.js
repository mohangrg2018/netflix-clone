import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
          alt="netflix logo"
        />
      </div>
      <button className="loginScreen__button">Sign In</button>
      <div className="loginScreen__gradient" />
      <div className="loginScreen__body">
        <h1>
          Unlimited movies, TV <br/>shows,
          and more.
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="loginScreen__input">
          <form>
            <input type="email" placeholder="Email address"/>
            <button className="loginScreen__getStarted">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
