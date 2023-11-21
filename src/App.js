import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Class from "./pages/Class";
import Purchases from "./pages/Purchases";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/class" element={<Class />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
