import React, { useState, useEffect } from "react";

const Slider = ({ contents }) => {
  
  const [index, setIndex] = useState(0);

  const click = (dir) => {
    setIndex(
      (
        index + (
          dir
            ? 1
            : contents.length - 1
        )
      ) % contents.length
    );
  };

  const dotClick = (newIndex) => {
    setIndex(newIndex);
  };

  useEffect(() => {
    const time = setInterval(() => {
      setIndex((index + 1) % contents.length);
    }, 2500);
    return () => clearInterval(time);
  }, [index]);

  return (
    <slides>
      {contents[index]}
      <prev onClick={()=>click(true)}>❰</prev>
      <next onClick={()=>click(false)}>❱</next>
      <indicators>
        {contents.map((content, i) => (
          <dot key={i} onClick={() => dotClick(i)}>
            {i === index ? "◉" : "◯"}
          </dot>
        ))}
      </indicators>
    </slides>
  );
};

export default Slider;
