import { useState, useEffect } from "react";
import PageTitle from "./PageTitle";
import BlogCard from "./BlogCard";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "../App.css";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  let { _id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/posts/")
      .then(function (response) {
        const rsp = response.data.data;

        console.log(rsp);
        setBlogs(rsp);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>my blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="container">
          <Link
            className="link text-decoration-none text-dark w-50"
            to={`/blogs/${blog._id}`}
          >
            <h1 className=" link"> {blog.title} </h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
