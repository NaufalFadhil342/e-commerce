import React from 'react';
import { Features } from '../../components/features';
import { Motor } from '../../components/motor';
import { News } from '../../components/news';
import { Promo } from '../../components/promo';

export const HomeBody = () => {
  return (
    <>
      <Motor />
      <Promo />
      <Features />
      <News />
    </>
  );
};
