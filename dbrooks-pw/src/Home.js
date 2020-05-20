import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "./Components/PageNavBar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <PageNavBar location="/home" />
      <div className="page-content-div">
        <div className="headline">{"cout<<About<<endl"}</div>
        <img className="picture" src={require("./images/pic1.JPG")} alt="pic" />
      </div>
    </div>
  );
}

export default Home;
