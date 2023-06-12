import { useState, useEffect } from "react";
import PageTitle from "./PageTitle";
import axios from "axios";

export default function BlogList() {

  const[blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/posts/')
  .then(function (response) {
    const rsp = response.data.data
   // console.log(rsp)
    setBlogs(rsp)
  })
  .catch( (error)=> console.error(error));

  }, [blogs])
  return (

   <div>
   <h1>my blogs</h1>
     {
    blogs.map((blog)=>(
          <div key={blog.id}>
            {/* <h1> {blog._id} </h1> */}
  
          </div>
         ))
  }

     </div>
  )
}
