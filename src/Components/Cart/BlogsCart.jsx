import React, { useEffect, useState } from 'react';

const BlogsCart = ({readTime}) => {
    console.log(readTime);
    const [time, setTime] = useState(readTime);
    useEffect(()=>{
        const getReadingTime = localStorage.getItem("ReadingTime");
        // console.log(ReadingTime);
        setTime(getReadingTime)
    },[readTime])
    return (
        <div>
            <h2>Spend time on Read : {time} min</h2>
        </div>
    );
};

export default BlogsCart;