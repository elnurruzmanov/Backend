import React from "react";
import { Routes, Route } from "react-router-dom";
import Body from "../components/Body/Body";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Body />}></Route>
        <Route path="/add" element={<h1>Add</h1>}></Route>
      </Route>

      <Route path="*" element={<h1>Not Found 404 </h1>}></Route>
    </Routes>
  );
};

export default Root;
