import React from 'react';

const Questions = () => {
    return (
        <div>
            <p>1. What is the difference between state and props</p>
            <p>Ans: We use props for pass data from one component to another component. on the other hand state is changable and it can use in the specific component where we declare it.</p>
            <p>2. How useState works?</p>
            <p>Ans: useState is a React hook we can pass function throw it. It returns array with 2 value. it takes an initial value as an argument and return an updated state value when we call the function.</p>
            <p>3. useEffect work accept data load?</p>
            <p>Ans: Validating input field, Live filtering, trigger animation or new array value.</p>
            <p>4. How does React work?</p>
            <p>Ans: React works by creating Virtual DOM to update browser DOM.In React we can Create component and call resue them this thing makes our code more Efficient.</p>
        </div>
    );
};

export default Questions;