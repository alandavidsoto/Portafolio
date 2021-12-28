import { Grid, Heading, Image, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import data from '../help/data';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Scrollbar } from 'swiper';
import 'swiper/css/bundle';
import Titulo from '../titulo';
const Proyectos = () => {
  return (
    <section>
      <Titulo texto="Proyectos" />
      <Swiper
        modules={[EffectCoverflow, Autoplay, Scrollbar]}
        effect={'coverflow'}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
      >
        {data.map((elemento) => (
          <SwiperSlide key={elemento.id} style={{ marginRight: '0px' }}>
            <Card elemento={elemento} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Proyectos;
