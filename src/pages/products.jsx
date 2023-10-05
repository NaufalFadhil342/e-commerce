import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/products.css';

const Products = () => {
  return (
    <>
      <div className="productsPage">
        <h1>Pilih Motor Favorit Anda</h1>
        <div className="catMotor">
          <NavLink to="/products/matic" className={({ isActive }) => (isActive ? 'active' : '')}>
            Matic
          </NavLink>
          <NavLink to="/products/sport" className={({ isActive }) => (isActive ? 'active' : '')}>
            Sport
          </NavLink>
          <NavLink to="/products/cub" className={({ isActive }) => (isActive ? 'active' : '')}>
            Cub
          </NavLink>
          <NavLink to="/products/ev" className={({ isActive }) => (isActive ? 'active' : '')}>
            EV
          </NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Products;
