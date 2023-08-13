import React from "react";
import homeImg from "../../../Assets/images/home.svg";
import "./Home.css";
import ViewPost from "../ViewPost/ViewPost";
const Home = () => {
  return (
    <div>
      <div className="homeDiv">
        <img className="homeImg" src={homeImg} alt="" />
      </div>
      <ViewPost />
    </div>
  );
};

export default Home;
