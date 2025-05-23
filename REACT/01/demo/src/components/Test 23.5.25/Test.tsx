import React from "react";
import { useState, useEffect } from "react";

type Props = {
  title: string;
  visible: boolean;
  users: Array<string>;
};

export default function Counter() {
  const [visible, setVisible] = useState<boolean>(true);
  const [users, setUsers] = useState<Array<string>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div className={visible ? "bg-blue-100" : "bg-red-100"}>
      <h1></h1>
      <div>
        {users.map((user: User) => {
          return <div key={user.id}>{user.username}</div>;
        })}
      </div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </div>
  );
}
