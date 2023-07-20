import React, { Component } from "react";
import Navbar from "./navbar";
import Part1 from "./part1";
import Part2 from "./part2";
import Part3 from "./part3";
import Part4 from "./part4";
import Part5 from "./part5";
import Part6 from "./part6";
import Footer from "./footer";
class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
        <Part6 />
        <Footer />
      </>
    );
  }
}

export default Home;
