import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogView() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/${id}`)
      .then((response) => {
        const fetchedBlog = response.data;
        setBlog(fetchedBlog);
        console.log(fetchedBlog)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
console.log(blog)

  return (
    <div>
      {blog ? (
        <>
        <div className="m-5">
        <h1>{blog.data.title}</h1>
          <img src={blog.data.imgURL} alt="blog image" className="blog-img"/>
          <div>
          <p>{blog.data.author} published this post on: {blog.data.timestamp}</p>
          <p>{blog.data.text}</p>
          </div>
        </div>
    
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
