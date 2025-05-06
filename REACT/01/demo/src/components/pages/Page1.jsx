import React from "react";
import Card from "./Card";
import { Link } from "react-router";

export default function Page1() {
    const person = { firstname: "hans", lastname: "müller" };
  return (
    <div className="w-screen bg-amber-200">
      <div className="grid grid-cols-3 w-screen gap-2">
        <Card />
        <Card />
      </div>
      <Link to="/p2"
      state = {{person:person, title: "test"}}
      >Page 2</Link>
    </div>
  );
}