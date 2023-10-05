import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    link: '/products',
    name: 'Matic',
  },
  {
    link: '/products',
    name: 'Sport',
  },
  {
    link: '/products',
    name: 'Cub',
  },
  {
    link: '/products',
    name: 'EV',
  },
  {
    link: '/products',
    name: 'BigBike',
  },
];

export const NavFooter = () => {
  return (
    <>
      <div className="link">
        <div>
          <p>Corporate</p>
          <Link to="/about">About Hando</Link>
          <Link to="/one-heart">One Heart</Link>
          <Link to="/career">Career</Link>
        </div>
        <div>
          <p>Services</p>
          <Link to="/services">Full Services</Link>
          <Link to="/parts">Sparepart</Link>
          <Link to="/helmet">Helmet</Link>
        </div>
      </div>
      <div className="link">
        <div>
          <p>Products</p>
          {products.map((product, index) => {
            return (
              <div key={index}>
                <Link to={product.link}>{product.name}</Link>
              </div>
            );
          })}
        </div>
        <div>
          <p>Dealer</p>
          <Link to="/dealer">Find dealer</Link>
          <Link to="/online-shop">Online Shop</Link>
        </div>
      </div>
    </>
  );
};
