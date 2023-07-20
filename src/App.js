import LoginPage from "./components/loginpage";
import "./App.css";
import HomePage from "./components/home";
import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// <div className="App">
//   <Navbar />
//   <LoginPage />
// </div>
export default App;

// <Part1 />
// <Part2 />
// <Part3 />
// <Part4 />
// <Part5 />
// <Part6 />
// <Footer />
