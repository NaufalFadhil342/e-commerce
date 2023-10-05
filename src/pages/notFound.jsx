import React from 'react';
import '../styles/notFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>This Page Haven't Content Yet</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
