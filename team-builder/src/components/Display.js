import React from "react";
import Forms from "./Forms";
import "../App.css";

export default function Display({ newMember }) {
  return (
    <div className="team-container">
      <h3>Name: {newMember.name}</h3>
      <h3>Email: {newMember.email}</h3>
      <h3>JobTitle: {newMember.jobtitle}</h3>
    </div>
  );
}
