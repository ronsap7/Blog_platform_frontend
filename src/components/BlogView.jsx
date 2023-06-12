import { useParams, Link } from "react-router-dom";


export default function BlogView({blog}) {

  const { id } = useParams();

  return (
    <div>
      <h1>the blog title</h1>
      <img src="" alt="blog image " />
      <p>author publihed this post on: date</p>
      <p>share</p>
      <p>Edit</p>
      <p>Delete</p>
      
    <p>blog content</p>
    </div>
  )
}
