import React, { useState } from "react"

export default function Button({ name, description }) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
    let text = "Click me!";
    let style = amountOfClicks>7?"bg-green-500":"";
  
    return (
      <div
        className={`bg-blue-500 w-40 hover:cursor-pointer select-none ${style}`}
        onClick={() => {
          setAmountOfClicks(amountOfClicks + 1);
        }}
      >
        <h1 className="font-extrabold text-2xl">{text}</h1>
        <p>{description}</p>
        <div>Amount of clicks: {amountOfClicks}</div>
      </div>
    );
  }