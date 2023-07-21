import LoginPage from "./components/loginpage";
import "./App.css";
import HomePage from "./components/home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    // <HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    // </HashRouter>
  );
}

export default App;
