import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scroll > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="header__content">
        <div className="header__logo">
          <img
            onClick={() => history.push("/")}
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="neflix logo"
          />
        </div>
        <div className="header__avatar">
          <img
            onClick={() => history.push("/profile")}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
