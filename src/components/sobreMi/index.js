import { Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Titulo from '../titulo';

const SobreMi = () => {
  return (
    <section>
      <Titulo texto="Sobre Mi" />
      <Grid
        templateColumns={['1fr', '55% 45%', '60% 40%']}
        alignItems="center"
        style={{
          padding: '5%',
          borderRadius: '10px'
        }}
        bg="green.400"
      >
        <Text
          fontSize={{ base: 'lg', sm: 'xl', md: 'xl', lg: '2xl' }}
          fontFamily="ubuntu"
          color="whiteAlpha.900"
        >
          Desarrollador Web Front-end con sólidos conocimientos de Javascript y
          perfeccionándome actualmente en React.js. Me gustaría tener la
          posibilidad de continuar aprendiendo y aportar mis conocimientos y
          experiencia trabajando en equipo.
        </Text>
        <Image src="https://res.cloudinary.com/dcea83ydd/image/upload/v1628621618/portafolio/guy_cat_lksj1x.svg" />
      </Grid>
    </section>
  );
};

export default SobreMi;
