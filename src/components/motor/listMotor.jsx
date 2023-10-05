import React from 'react';
import { useNavigate } from 'react-router-dom';
import { category } from './product';

export const ListMotor = () => {
  const navigate = useNavigate();

  const motorCategory = category.map((motor, index) => {
    return (
      <div key={index} onClick={() => navigate('/products')}>
        <img src={motor.image} alt={motor.category} />
      </div>
    );
  });

  return <div className="listMotor">{motorCategory}</div>;
};
