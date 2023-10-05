import React from 'react';
import { sport } from './productsData';
import '../../styles/productsData.css';

const Sport = () => {
  const renderedSport = sport.map((motor) => {
    return (
      <div key={motor.id}>
        <img src={motor.image} alt={motor.name} />
        <div className="desc">
          <h3>{motor.name}</h3>
          <div className="price">
            <p>Harga mulai</p>
            <span>Rp. {motor.price}</span>
          </div>
        </div>
      </div>
    );
  });

  return <div className="sport">{renderedSport}</div>;
};

export default Sport;
