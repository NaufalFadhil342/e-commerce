import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Corporates } from './corporates';
import { Services } from './services';

const Navbar = () => {
  const [openCorporates, setOpenCorporates] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <div className="navbar">
      <h1>
        <Link to="/">Hando</Link>
      </h1>
      <nav>
        <div className={openCorporates ? 'corporatesActive' : 'corporates'} onMouseLeave={() => setOpenCorporates(false)}>
          <p onMouseEnter={() => setOpenCorporates(!openCorporates)}>Corporates</p>
          {openCorporates && <Corporates setCloseMenu={setOpenCorporates} />}
        </div>
        <div className={openServices ? 'servicesActive' : 'services'} onMouseLeave={() => setOpenServices(false)}>
          <p onMouseEnter={() => setOpenServices(!openServices)}>Services</p>
          {openServices && <Services setCloseMenu={setOpenServices} />}
        </div>
        <div className="products">
          <NavLink to="/products">Products</NavLink>
        </div>
        <div className="special">
          <NavLink to="/promo" className={({ isActive }) => (isActive ? 'active' : '')}>
            Special
          </NavLink>
        </div>
        <div className="dealer">
          <NavLink to="/dealer" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dealer
          </NavLink>
        </div>
      </nav>
      <div className="badge">
        <span>
          <FaShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
