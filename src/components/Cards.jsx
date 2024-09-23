import React from 'react';
import './Cards.css';

const Cards = ({ onClick, imgSrc, constentHead, constentPara, color }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgSrc} alt={constentHead} />
      <h2>{constentHead}</h2>
      <p>{constentPara}</p>
    </div>
  );
};

export default Cards;
