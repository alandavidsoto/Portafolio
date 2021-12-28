import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from './components/header';
import Proyectos from './components/proyectos';
import Habilidades from './components/habilidades';
import Inicio from './components/inicio';
import SobreMi from './components/sobreMi';
const App = () => {
  return (
    <Container className="App" maxW="container.xl">
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Proyectos />
    </Container>
  );
};

export default App;
