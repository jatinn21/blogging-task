import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const checkWelcome = () => {
    if (JSON.parse(localStorage.LoggedIn).length == 1) {
      let activeUserName = JSON.parse(localStorage.LoggedIn)[0].activeUserName;
      return activeUserName;
    } else {
      return "pro";
    }
  };

  const checkLogOut = () => {
    if (JSON.parse(localStorage.LoggedIn).length == 1) {
      return "Logout";
    } else {
      return "Login / SignUp";
    }
  };

  return (
    <nav>
      <div class="logo">
        <span>BlogExpress</span>
      </div>
      <div class="links" id="home">
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#blogs">Blog</a>
        </span>
        <span>
          <a href="#podcasts">Podcast</a>
        </span>
        <span>
          <a href="#articles">Articles</a>
        </span>
        <span>
          <a href="#books">Books</a>
        </span>
        <span>
          <a href="#contact">Contact</a>
        </span>
      </div>
      <div class="loginSignup">
        <div className="welcome">
          <span className="welcomeAcc">{checkWelcome()}</span>
        </div>
        <div>{checkLogOut()}</div>
      </div>
      <div className="trial"></div>
    </nav>
  );
};

export default Navbar;
