import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import {blogs} from "../fakeData";
import "./App.css"
import BlogsCart from './Components/Cart/BlogsCart';
const App = () => {
 const[readTime, setReadTime] = useState();
 console.log(readTime);
const handleDescription = (time) =>{
     const previousTime = JSON.parse(localStorage.getItem("ReadingTime"));
    if(previousTime){
      const sum = previousTime+time;
      localStorage.setItem("ReadingTime", sum)
      // console.log(sum);
      setReadTime(sum)
    }
    else{
      localStorage.setItem("ReadingTime", time);
      setReadTime(previousTime)
    }
}

  return (
    <div>
      <Header></Header>
  <div className='flex'>
 
      <div className='blog-container lg:px-48 md:px-40 mt-5 grid gap-5'>
      {
      
      blogs.map((blog) => (
        <Blogs blog = {blog} handleDescription={handleDescription}></Blogs>
      ))
    }
      
      </div>
      <div className='cart-container'>
      <BlogsCart readTime={readTime}></BlogsCart>
      </div>
  </div>
   

     
    </div>
  );
};

export default App;