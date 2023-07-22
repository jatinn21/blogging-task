import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AllBlogs.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const AllBlogs = () => {
  const navigate = useNavigate();
  let [dummyData, setDummyData] = useState(
    JSON.parse(localStorage.AllBlogs).slice()
  );
  const [search, setSearch] = useState();

  const checkTheNumberOfBlogs = () => {
    if (localStorage.AllBlogs) {
      const parsedData = JSON.parse(localStorage.AllBlogs);
      return (
        <h1 className="totalBlogsSections">
          Total Blogs : {parsedData.length}
        </h1>
      );
    } else {
      // create an empty localStorage for all blogs
      localStorage.setItem("AllBlogs", []);
      return <h1 className="totalBlogsSections">There are 0 blogs </h1>;
    }
  };

  // When User Clicks the Blog
  const blogClicked = (e) => {
    console.log("ID", e.currentTarget.id);
    localStorage.getItem("viewBlogID", e.currentTarget.id);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setDummyData(JSON.parse(localStorage.AllBlogs));
    } else {
      const filterData = dummyData.filter((blogObj) => {
        return (
          blogObj.blogCategory
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          blogObj.blogTitle.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      console.log(filterData, "hihihihh");
      setDummyData(filterData);
    }
  };

  return (
    <>
      <nav>
        <div className="logo">
          <span>BlogExpress</span>
        </div>
        <div className="links">
          <span id="homepage">
            <Link to={"/home"}>Homepage </Link>
          </span>
          <span className="separator">|</span>
          <span>
            <Link to={"/write"}>
              Write a blog
              <span className="material-symbols-outlined">edit_square</span>
            </Link>
          </span>
        </div>
        <span
          className="exitBtn"
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You want to Logout?",
              showCancelButton: true,
              confirmButtonColor: "rgb(255 63 63)",
              cancelButtonColor: "rgb(27 125 199)",
              confirmButtonText: "Yes, Logout!",
            }).then((result) => {
              if (result.isConfirmed) {
                localStorage.removeItem("LoggedIn");
                setTimeout(() => {
                  window.location.replace(
                    "https://blogging-task-by-jatin.netlify.app"
                  );
                }, 500);
              }
            });
          }}
        >
          <span>Logout</span>
        </span>
      </nav>
      {checkTheNumberOfBlogs()}
      <div className="filter">
        <input
          type="search"
          className="blogInput"
          onChange={(e) => {
            searchHandler(e);
          }}
          value={search}
          style={{
            border: "2px solid black",
            borderRadius: "3rem",
            padding: "2rem 6rem",
          }}
          placeholder="Search according to Category or Blog Title"
        />
      </div>
      <div className="AllBlogs">
        {dummyData.map((blog) => {
          return (
            <section
              className="BlogContainer"
              onClick={(e) => {
                const retreiveData = localStorage.getItem("AllBlogs");
                navigate("/viewBlog");
                localStorage.setItem("Blogkey", e.currentTarget.id);
                localStorage.setItem("AllBlogs2", retreiveData);
                setTimeout(() => {
                  localStorage.setItem("AllBlogs2", retreiveData);
                  const p2 = localStorage.getItem("AllBlogs2");
                  localStorage.removeItem("AllBlogs");
                  localStorage.setItem("AllBlogs", p2);
                  localStorage.removeItem("AllBlogs2");
                }, 500);
              }}
              id={blog.id}
            >
              {" "}
              <span className="readMore center">click to read More</span>
              <div className="blogImageSection"></div>
              <div className="blogDetails">
                <p className="blogTitleSection">
                  <h1>Title : {blog.blogTitle}</h1>
                  <h3
                    style={{
                      textAlign: "end",
                      color: "grey",
                      textTransform: "uppercase",
                    }}
                  >
                    {blog.blogCategory}
                  </h3>
                </p>
                <p className="blogDescSection">
                  {blog.blogDesc.slice(0, 200) + "..."}
                </p>
                <p className="blogBy"> By {blog.userName}</p>
              </div>
            </section>
          );
        })}
      </div>
      ;
    </>
  );
};
export default AllBlogs;
