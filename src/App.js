import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost />
    </div>
  );
};

export default App;
