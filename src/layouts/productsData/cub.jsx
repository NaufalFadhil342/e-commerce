import React from 'react';
import { cub } from './productsData';
import '../../styles/productsData.css';

const Cub = () => {
  const renderedCub = cub.map((motor) => {
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

  return <div className="cub">{renderedCub}</div>;
};

export default Cub;
