import React from 'react';
import { ev } from './productsData';
import '../../styles/productsData.css';

const Ev = () => {
  const renderedEv = ev.map((motor) => {
    return (
      <div key={motor.id}>
        <img src={motor.image} alt={motor.name} />
        <div className="desc">
          <h3>{motor.name}</h3>
          <div className="price">
            <p>Kisaran Harga</p>
            <span>Rp. {motor.price}</span>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ev">{renderedEv}</div>;
};

export default Ev;
