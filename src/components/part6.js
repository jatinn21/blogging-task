import React, { Component } from "react";

class part6 extends Component {
  render() {
    return (
      <section class="part6">
        <div class="subscribeTitle center">
          <h1>Subscribe to Get More</h1>
        </div>
        <div class="subscribeDesc center">
          <span>
            Sign up here to get the latest news, updates and special offers
            delivered directly to your inbox.
          </span>
        </div>
        <div class="center" id="subscribeMail">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />

          <input class="Subscribe" type="button" value="Subscribe" />
        </div>
      </section>
    );
  }
}

export default part6;
