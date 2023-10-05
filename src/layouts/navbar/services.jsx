import React from 'react';
import { Link } from 'react-router-dom';

export const Services = ({ setCloseMenu }) => {
  return (
    <div className="service">
      <div className="link">
        <Link to="/services" onClick={() => setCloseMenu(false)}>
          Full Services
        </Link>
        <Link to="/services/parts" onClick={() => setCloseMenu(false)}>
          Sparepart
        </Link>
        <Link to="/services/parts" onClick={() => setCloseMenu(false)}>
          Helmet
        </Link>
      </div>
    </div>
  );
};
