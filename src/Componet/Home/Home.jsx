import React from "react";
import "./home.css";
import Header from "./Header/Header";
import Featured from "./Featured/Featured";
import Trending from "./Trending/Trending";
import Team from "./Our Team/Team";
import Popular from "./Popular/Popular";
const Home = () => {
  return (
    <div>
      <Header />
      <Featured />
      <Trending />
      <Team />
      <Popular />
    </div>
  );
};

export default Home;
