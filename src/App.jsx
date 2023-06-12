
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InputMask from "./components/InputMask";
import BlogList from "./components/BlogList";
import BlogView from "./components/BlogView";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1>CROSSOVER BLOG</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<InputMask />} />
        <Route path="/blogs/:id" element={<BlogView />} />
      </Routes>
    </>
  );

}

export default App;
