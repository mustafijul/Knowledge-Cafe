import React, { useEffect, useState } from "react";



const Blogs = ({ blog, handleDescription}) => {
  
 
  const { id, name, per_img, img, Description, Reading_time } = blog;
 
  return (
    <div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>

          <div></div>
          <div className="card-body">

          <div  className='flex justify-between'>
          <div className="flex">
              <span>
                <img className="w-10 rounded-full" src={per_img} alt="" />
              </span>

              <h2 className="card-title ms-2">{name}</h2>
            </div>
            {/* bookmark */}
            <div>
              <p>{Reading_time} min read</p>
              
              </div>
            <svg onClick={()=>handleDescription(Reading_time)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>

          </div>
          
            

            <p>Mar 14 (4 days ago)</p>

            <p className="text-2xl font-bold">{Description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Blogs;
