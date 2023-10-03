import React, { useEffect, useState } from 'react';

const BlogsCart = ({readTime, bookMark}) => {
    console.log(readTime);
    console.log(bookMark);
    const [time, setTime] = useState(readTime);
    const [bookmark, setbookmark] = useState(bookMark);
    useEffect(()=>{
        const getReadingTime = localStorage.getItem("ReadingTime");
        // console.log(ReadingTime);
        setTime(getReadingTime)
    },[readTime])
    useEffect(()=>{
        const getBM = localStorage.getItem("BookMark");
        // console.log(ReadingTime);
        setbookmark(getBM)
    },[bookmark])
    return (
        <div>
            <h2>Spend time on Read : {time} min</h2>
            {/* <p className='text-2xl font-bold'>Bookmarked Blogs : {bookmark}</p> */}
            <p>{bookmark}</p>
        </div>
    );
};

export default BlogsCart;