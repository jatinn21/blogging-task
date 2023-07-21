import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Navbar = () => {
  const jsonDataString = localStorage.LoggedIn;
  const checkWelcome = () => {
    console.log("hello");
    console.log(localStorage);
    console.log(localStorage.LoggedIn);
    console.log(typeof localStorage.LoggedIn);
    if (jsonDataString) {
      const parsedData = JSON.parse(jsonDataString);
      console.log(parsedData);
      const userName = parsedData[0].activeUserName;
      const FormatedName = userName[0].toUpperCase() + userName.slice(1);
      return "Hey, " + FormatedName;
    }
  };
  const checkEntryExit = () => {
    let MsgBtn;
    if (jsonDataString) {
      MsgBtn = (
        <>
          <span
            className="exitBTn"
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You want to Logout?",
                showCancelButton: true,
                confirmButtonColor: "rgb(255 63 63)",
                cancelButtonColor: "rgb(27 125 199)",
                confirmButtonText: "Yes, Logout!",
              }).then((result) => {
                if (result.isConfirmed) {
                  localStorage.removeItem("LoggedIn");
                  setTimeout(() => {
                    window.location.replace(
                      "https://blogging-task-by-jatin.netlify.app"
                    );
                  }, 500);
                }
              });
            }}
          >
            LogOut
          </span>
        </>
      );
    } else {
      MsgBtn = (
        <Link to={"/login"} className="entryBtn">
          <span>Login / Signup</span>
        </Link>
      );
    }
    return MsgBtn;
  };

  return (
    <nav>
      <div className="logo">
        <span>BlogExpress</span>
      </div>
      <div className="links">
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
      <div className="loginSignup">
        <div className="welcome">
          <div className="welcomeAcc">{checkWelcome()}</div>
        </div>
        <div className="entryExit">
          <div className="exitEntryBtn">{checkEntryExit()}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
