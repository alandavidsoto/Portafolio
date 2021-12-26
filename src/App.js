import React from 'react';
import { Container } from '@chakra-ui/react';
import Header from './components/header';
import Proyectos from './components/proyectos';
import Habilidades from './components/habilidades';
import Inicio from './components/inicio';
const App = () => {
  return (
    <Container className="App" maxW="full">
      <Header />
      <Inicio />
      <Proyectos />
      <Habilidades />
    </Container>
  );
};

export default App;
