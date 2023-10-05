import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import {blogs} from "../fakeData";
import "./App.css"
import BlogsCart from './Components/Cart/BlogsCart';
const App = () => {
 const[readTime, setReadTime] = useState();
 const[bookmark, setbookmark] = useState();
//  console.log(readTime);

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

 




const handleBookmark = (bookmark) =>{
  const previousBM = JSON.parse(localStorage.getItem("bookmark"));
  let book = [];
 if(previousBM){
   book.push(...previousBM, bookmark)
   localStorage.setItem("bookmark", JSON.stringify(book))
  
   setbookmark(bookmark)
 
 }
 else{
   book.push(bookmark);
   localStorage.setItem("bookmark", JSON.stringify(book))
   setbookmark(previousBM);
 }
}








  return (
    <div>
      <Header></Header>
  <div className='lg:flex'>
 
      <div className='blog-container lg:px-48 md:px-40 mt-5 grid gap-5'>
      {
      
      blogs.map((blog) => (
        <Blogs blog = {blog} handleDescription={handleDescription} handleBookmark={handleBookmark}></Blogs>
      ))
    }
      
      </div>
      <div className='cart-container'>
      <BlogsCart bookmark={bookmark}  readTime={readTime}></BlogsCart>
      </div>
  </div>
   

     
    </div>
  );
};

export default App;