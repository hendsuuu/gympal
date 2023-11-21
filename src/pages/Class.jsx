import React from "react";
import CardClass from "../components/card/CardClass";
import { Navbar } from "../components/navbar/Navbar";

function Class() {
  const gradientBackgroundStyle = {
    background: "linear-gradient(to bottom, #4F6780, #777777)",
    height: "auto",
  };

  return (
    <>
      <div style={gradientBackgroundStyle}>
        <Navbar />
        <CardClass />
      </div>
    </>
  );
}

export default Class;
