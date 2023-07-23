import React, { useState } from "react";
import Navbar from "./navbar";

const ViewBlog = () => {
  let [a, setA] = useState();

  let Blogkey = localStorage.getItem("Blogkey");
  a = JSON.parse(localStorage.getItem("AllBlogs")).filter((blog) => {
    return blog.id == Blogkey;
  });

  const requiredBlog = a[0];
  let lik = requiredBlog.likes;
  let dislik = requiredBlog.dislikes;
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

  const updateBlogNumber = () => {
    requiredBlog.likes = lik;
    const newBlogs = JSON.parse(localStorage.getItem("AllBlogs")).map(
      (blog) => {
        if (blog.key == localStorage.getItem(Blogkey)) {
          blog.likes = lik;
          return blog;
        } else {
          return blog;
        }
      }
    );
    localStorage.setItem("AllBlogsss", JSON.stringify(newBlogs));
  };

  const updateBlogNumberDislike = () => {
    requiredBlog.dislikes = dislik;
    const newBlogs = JSON.parse(localStorage.getItem("AllBlogs")).map(
      (blog) => {
        if (blog.key == localStorage.getItem(Blogkey)) {
          blog.likes = dislik;
          return blog;
        } else {
          return blog;
        }
      }
    );
    localStorage.setItem("AllBlogsss", JSON.stringify(newBlogs));
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
          <span>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "5rem", cursor: "pointer" }}
              onClick={() => {
                console.log("akaca");
                document.querySelector("#LikeValue").textContent = ++lik;
                updateBlogNumber();
              }}
            >
              thumb_up
            </span>
            : <span id="LikeValue">0</span>
          </span>
          <span>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "5rem" }}
              onClick={() => {
                document.querySelector("#DisLikeValue").textContent = ++dislik;
                updateBlogNumberDislike();
              }}
            >
              thumb_down
            </span>
            : <span id="DisLikeValue">0</span>
          </span>
          <span>Comment : {callComments()}</span>
        </footer>
      </section>
    </>
  );
};

export default ViewBlog;
