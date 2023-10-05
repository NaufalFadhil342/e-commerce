import React from 'react';
import { Link } from 'react-router-dom';

export const Corporates = ({ setCloseMenu }) => {
  return (
    <div className="corporate">
      <div className="link">
        <Link to="/about" onClick={() => setCloseMenu(false)}>
          About Hando
        </Link>
        <Link to="/one-heart" onClick={() => setCloseMenu(false)}>
          One Heart
        </Link>
        <Link to="/careers" onClick={() => setCloseMenu(false)}>
          Careers
        </Link>
      </div>
    </div>
  );
};
