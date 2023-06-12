import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import InputMask from './components/InputMask';
import BlogList from './components/BlogList';
import BlogView from './components/BlogView';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* <h1>CROSSOVER BLOG</h1> */}
      <Navigation />
      <Routes>
        <Route path='/' element={<BlogList />} />
        <Route path='/create' element={<InputMask />} />
        <Route path='/blogs' element={<BlogList />} />
        <Route path='/blogs/:id' element={<BlogView />} />
      </Routes>
    </>
  );
}

export default App;
