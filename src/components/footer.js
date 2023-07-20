import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <footer class="part7 footer" id="contact">
        <div class="leftSide">
          <span class="logo">BlogExpress</span>
          <span class="leftSideDesc">
            Where words find wings. Share your ideas, connect with fellow
            writers, and leave your mark in the blogosphere.
          </span>
          <span class="creator">
            Designed & Developed by
            <a href="https://jatiin.netlify.app" class="me">
              Jatin
            </a>
          </span>
        </div>
        <div class="MiddleSide">
          <h1 class="MiddleTitle">Quick Links</h1>
          <span class="quicklinks">
            <span>Home</span>
            <span>Membership</span>
            <span>About</span>
            <span>Contact</span>
          </span>
        </div>
        <div class="rightSide center">
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
