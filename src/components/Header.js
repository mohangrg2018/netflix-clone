import React, {useState, useEffect} from "react";
import "./Header.css";

const Header = () => {
  const [show,handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scroll >100){
      handleShow(true);
    }else{
      handleShow(false)
    }
  }

  useEffect(() =>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  },[]);
  
  return (
    <div className={`header ${show && "header__black"}`}>
      <div className="header__content">
        <div className="header__logo">
          <img
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="neflix logo"
          />
        </div>
        <div className="header__avatar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
