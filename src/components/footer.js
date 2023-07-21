import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <footer className="part7 footer" id="contact">
        <div className="leftSide">
          <span className="logo">BlogExpress</span>
          <span className="leftSideDesc">
            Where words find wings. Share your ideas, connect with fellow
            writers, and leave your mark in the blogosphere.
          </span>
          <span className="creator">
            Designed & Developed by
            <a href="https://jatiin.netlify.app" className="me" target="_blank">
              Jatin
            </a>
          </span>
        </div>
        <div className="MiddleSide">
          <h1 className="MiddleTitle">Quick Links</h1>
          <span className="quicklinks">
            <span>Home</span>
            <span>Membership</span>
            <span>About</span>
            <span>Contact</span>
          </span>
        </div>
        <div className="rightSide center">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </footer>
    );
  }
}

export default footer;
