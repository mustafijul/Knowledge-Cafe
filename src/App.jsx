import React from 'react';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import {blogs} from "../fakeData";
import "./App.css"
const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='blog-container lg:px-48 md:px-40 mt-5 grid gap-5'>
      {
      
      blogs.map((blog) => (
        <Blogs blog = {blog}></Blogs>
      ))
    }
      
      </div>

     
    </div>
  );
};

export default App;