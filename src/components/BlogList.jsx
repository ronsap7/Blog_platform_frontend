import { useState, useEffect } from "react";
import PageTitle from "./PageTitle";

import axios from "axios";

export default function BlogList() {

  const[blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('/http://localhost:8000/posts/')
  .then(function (response) {
    // handle success
    console.log(response);
   // setBlogs(response)
  })
  .catch( (error)=> console.error(error));

  }, [])
  return (

    <div>BlogList</div>
  )
}
