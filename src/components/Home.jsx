import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import "./Styles.css";
import Navbar from "./Navbar";
const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path); // This will redirect to the specified path
  };

  return (
    <>
      <Navbar />

      <section id="home">
        <div className=" h-100vh flex justify-evenly items-center">
          <Cards
            id="cereals"
            onClick={() => handleCardClick("/cereals")}
            imgSrc="https://cdn.pixabay.com/photo/2018/02/17/23/02/field-3161149_960_720.jpg"
            constentHead="Cereals"
            constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque."
            color="rgb(248, 51, 84)"
          />
          <Cards
            id="vegetables"
            onClick={() => handleCardClick("/vegetables")}
            imgSrc="https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_640.jpg"
            constentHead="Vegetables"
            constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque."
            color="orange"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
