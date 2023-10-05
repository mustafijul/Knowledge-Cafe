import React, { useEffect, useState } from "react";


const BlogsCart = ({ readTime, bookMark }) => {
  console.log(readTime);
  console.log(bookMark);
  const [time, setTime] = useState(readTime);
  const [bookmark, setbookmark] = useState(bookMark);
  useEffect(() => {
    const getReadingTime = localStorage.getItem("ReadingTime");
    // console.log(ReadingTime);
    setTime(getReadingTime);
  }, [readTime]);
  useEffect(() => {
    const getBM = localStorage.getItem("bookmark");
    // console.log(ReadingTime);
    setbookmark(getBM);
  }, [bookMark]);
  console.log(bookmark);

  return (
    <div>
      <h2>Spend time on Read : {time} min</h2>
      <div className="text-2xl font-bold">
        <p>total bookmark: {}</p>
        <p>Bookmarked title : {bookmark}</p>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogsCart;
