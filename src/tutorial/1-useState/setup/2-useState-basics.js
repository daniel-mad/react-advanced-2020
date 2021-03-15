import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('Hello world'));
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello daniel');
    } else {
      setText('random title');
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
