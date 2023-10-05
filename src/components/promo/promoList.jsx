import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { promoDummy } from './promoDummy';

export const PromoList = () => {
  const navigate = useNavigate();

  const dummy = promoDummy.map((promo, index) => {
    return (
      <SwiperSlide className="promoList" key={index}>
        <div className="promoListImage">
          <img src={promo.image} alt={promo.id} />
        </div>
        <div className="promoListContent">
          <h2>{promo.title}</h2>
          <p>{promo.desc}</p>
          <button onClick={() => navigate('/promo')}>Selengkapnya...</button>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickAble: true,
        }}
        centeredSlides={true}
      >
        {dummy}
      </Swiper>
    </div>
  );
};
