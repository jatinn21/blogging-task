import React, { useState } from "react";
import Navbar from "./navbar";

const ViewBlog = () => {
  let [a, setA] = useState();
  const Blogkey = localStorage.getItem("Blogkey");
  a = JSON.parse(localStorage.getItem("AllBlogs")).filter((blog) => {
    return blog.id == Blogkey;
  });
  const requiredBlog = a[0];
  console.log("this is", requiredBlog);

  const callAuthor = () => {
    return requiredBlog.userName;
  };
  const callTitle = () => {
    return requiredBlog.blogTitle;
  };
  const callDesc = () => {
    return requiredBlog.blogDesc;
  };
  const callCategory = () => {
    return requiredBlog.blogCategory;
  };
  const callLikes = () => {
    return requiredBlog.likes;
  };
  const callDislikes = () => {
    return requiredBlog.dislikes;
  };
  const callComments = () => {
    return requiredBlog.comments.length;
  };
  return (
    <>
      <Navbar />
      <section className="BlogViewParent center">
        <header></header>
        <p className="center">
          <span>
            Title : {callTitle()} & Category : {callCategory()}
          </span>
          <span>By {callAuthor()}</span>
        </p>
        <main>{callDesc()}</main>
        <footer>
          <span>Likes : {callLikes()}</span>
          <span>Dislike : {callDislikes()}</span>
          <span>Comment : {callComments()}</span>
        </footer>
      </section>
    </>
  );
};

export default ViewBlog;
