import react from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Link to='/create'>
        <div>Create</div>
      </Link>

      <div>my&nbsp;Posts</div>
      <div>Search</div>
    </>
  );
}
