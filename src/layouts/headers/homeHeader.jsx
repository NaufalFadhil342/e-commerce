import React from 'react';
import '../../styles/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { banners } from './banner';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HomeHeader = () => {
  return (
    <div className="banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="bg" src={image.image} alt={image.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
