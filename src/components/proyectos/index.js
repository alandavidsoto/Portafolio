import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import data from '../help/data';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import Titulo from '../titulo';
const Proyectos = () => {
  return (
    <Box p={5}>
      <a name="proyectos"></a>
      <Titulo texto="Mis Proyectos" />
      <Swiper
        style={{ marginBottom: '1.25rem' }}
        modules={[Autoplay]}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={50}
        breakpoints={{
          400: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 2
          },
          900: {
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4
          }
        }}
        loop={true}
      >
        {data.map((elemento) => (
          <SwiperSlide key={elemento.id} style={{ marginRight: '0px' }}>
            <Card elemento={elemento} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Divider />
    </Box>
  );
};

export default Proyectos;
