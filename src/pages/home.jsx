import React from 'react';
import '../styles/home.css';
import { HomeHeader } from '../layouts/headers/homeHeader';
import { HomeBody } from '../layouts/body/homeBody';

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeBody />
    </div>
  );
};

export default Home;
