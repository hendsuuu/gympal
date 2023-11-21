import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import TableInformation from "./../components/table/TableInformation";
import CardClassHistory from "../components/card/CardClassHistory";

function Home() {
  const gradientBackgroundStyle = {
    background: "linear-gradient(to bottom, #4F6780, #777777)",
    height: "auto",
  };

  return (
    <>
      <div style={gradientBackgroundStyle}>
        <Navbar />
        <TableInformation />
        <CardClassHistory />
      </div>
    </>
  );
}

export default Home;
