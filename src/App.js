import LoginPage from "./components/loginpage";
import "./App.css";
import HomePage from "./components/home";
import React from "react";
import AllBlogs from "./components/allBlogs";
import WriteBlog from "./components/writeBlog";
import ViewBlog from "./components/viewBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/allBlogs" element={<AllBlogs />} />
        <Route path="/write" element={<WriteBlog />} />
        <Route path="/viewBlog" element={<ViewBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
