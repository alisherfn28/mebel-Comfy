import React from "react";
import "../App.css";
import mebel from "../assets/mebel.jpg";

function Home() {
  return (
    <div>
      <div className="container home_container">
        <div className="home_left">
          <h1>We are changing the way people shop</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button>OUR PRODUCTS</button>
        </div>
        <div className="home_right">
          <img src={mebel} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
