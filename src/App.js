import './components/header/underlineDinamic.scss';
import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Header from './components/header';
import Proyectos from './components/proyectos';
import Habilidades from './components/habilidades';
import Inicio from './components/inicio';
import SobreMi from './components/sobreMi';
import Contacto from './components/contacto';
import MiCV from './components/MiCV';
import Footer from './components/footer';
import ParticleBackground from './components/particles';

const App = () => {
  return (
    <Box className="App" maxWidth={'1950px'} margin="auto">
      <ParticleBackground />
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}>
        <MiCV />
        <Contacto />
      </Grid>
      <Footer />
    </Box>
  );
};

export default App;
