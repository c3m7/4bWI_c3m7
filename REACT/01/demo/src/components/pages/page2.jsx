import React from "react";
import { Link, useLocation } from "react-router";


export default function Page2() {
    const location = useLocation();
    const person = location.state.person;
    console.log(person);
    console.log(location);
  return (
    <div>
        <h1>Page 2</h1>
        <div>Hello {person.firstname}</div>

        <Link to="/">Page 1</Link>
    </div>

  );
}