import React, { useEffect } from 'react';
import { Box, Container, Divider, Grid } from '@chakra-ui/react';
import Header from './components/header';
import Proyectos from './components/proyectos';
import Habilidades from './components/habilidades';
import Inicio from './components/inicio';
import SobreMi from './components/sobreMi';
import Contacto from './components/contacto';
import MiCV from './components/MiCV';
import Footer from './components/footer';

const App = () => {
  return (
    <Box className="App" maxWidth={'1950px'}>
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}>
        <Contacto />
        <MiCV />
        <Divider />
      </Grid>
      <Footer />
    </Box>
  );
};

export default App;
