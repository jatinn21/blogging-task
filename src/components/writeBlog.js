import React from "react";
import "../AllBlogs.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WriteBlog = () => {
  const navigate = useNavigate();
  // Storing all the data of the blog
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  const [blogCategory, setBlogCategory] = useState("News");
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);
  const userName = JSON.parse(localStorage.LoggedIn)[0].activeUserName;
  console.log(blogTitle);
  console.log(blogDesc);
  console.log(blogCategory);
  let id = Date.now(); // to generate a random Id
  let likes,
    dislikes = 0;
  const submitBlog = () => {
    // created aan empty array in localStorage for storing all the blogs the blog

    const BlogData = {
      userName,
      id,
      blogTitle,
      blogDesc,
      blogCategory,
      likes: 0,
      comments: [],
      dislikes: 0,
    };
    // console.log("hihihi", localStorage.getItem("AllBlogs"));

    setBlog(BlogData); // Blog data is here! in the form of obj
    blogs.push(BlogData); // Blogs data is here! in the form of obj
    if (JSON.parse(localStorage.AllBlogs).length > 0) {
      console.log("react");
      const storeAllPost = JSON.parse(localStorage.AllBlogs);
      console.log("hello", storeAllPost);
      const previousBlogs = storeAllPost.map((a) => {
        return a;
      });
      previousBlogs.push(BlogData);
      localStorage.setItem("AllBlogs", JSON.stringify(previousBlogs));

      console.log("new Rray :", previousBlogs);
    }
    // Putting it on localStorage
    else {
      localStorage.setItem("AllBlogs", JSON.stringify(blogs));
    }
    // making the input fields empty
    setBlogTitle("");
    setBlogDesc("");
    setBlogCategory("News");
    // to navigate to all Blogs
    // navigate("/allBlogs");
  };

  const category = () => {
    const options = [
      { value: "News", id: 1, label: "News" },
      { value: "Fashion", id: 2, label: "Fashion" },
      { value: "Personal", id: 3, label: "Personal" },
      { value: "Travel", id: 4, label: "Travel" },
      { value: "Food", id: 5, label: "Food" },
      { value: "Technology", id: 6, label: "Technology" },
      { value: "Educational", id: 7, label: "Educational" },
      { value: "Finance and Money", id: 8, label: "Finance and Money" },
    ];

    const categoryOptions = options.map((htmlOption, i) => [
      `${htmlOption.value}`,
      i + 1,
    ]);

    return (
      <div className="categoryBox center">
        <label>category : </label>
        <select
          className="author__Blog_category"
          onChange={(e) => {
            setBlogCategory(e.target.value);
          }}
        >
          {categoryOptions.map((a) => {
            return <option key={a[1]}>{a[0]}</option>;
          })}
        </select>
      </div>
    );
  };

  return (
    <div className="writeBlog center">
      <form
        className="blogForm"
        onSubmit={(e) => {
          e.preventDefault();
          submitBlog();
        }}
      >
        <h1 className="blog__heading">Write A Blog</h1>

        <input
          className="blogInput title"
          type="text"
          placeholder="Enter Blog Title"
          required
          onChange={(event) => {
            setBlogTitle(event.target.value);
          }}
          value={blogTitle}
        />
        <textarea
          className="blogInput author__BlogDesc"
          type="text"
          placeholder="Enter Blog Description"
          required
          onChange={(event) => {
            setBlogDesc(event.target.value);
          }}
          value={blogDesc}
          cols={100}
        >
          {blogDesc}
        </textarea>
        <footer>
          {category()}
          <input
            type="submit"
            value="Submit"
            className="SubmitBlog"
            style={{ marginLeft: "3rem" }}
          />

          <input
            type="submit"
            style={{ marginLeft: "3rem" }}
            value=" check Blogs"
            className="SubmitBlog"
            onClick={() => {
              navigate("/AllBlogs");
            }}
          />
        </footer>
      </form>
    </div>
  );
};
export default WriteBlog;
