import React, { useEffect, useState } from "react";

type CounterProps = {
  text: string;
};

export default function Counter({ text }: CounterProps) {
  const [comments, setComments] = useState<CounterProps[]>();
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);
  return (
    <div className="bg-green-200">
      <h1>Hallo</h1>
      <button
        onClick={() => {
          setActive(true);
        }}
      >
        Click me {active}
      </button>
    </div>
  );
}
