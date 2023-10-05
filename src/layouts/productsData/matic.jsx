import React from 'react';
import { matic } from './productsData';
import '../../styles/productsData.css';

const Matic = () => {
  const renderedMatic = matic.map((motor) => {
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

  return <div className="matic">{renderedMatic}</div>;
};

export default Matic;
