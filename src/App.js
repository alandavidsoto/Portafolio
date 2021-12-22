import React from 'react';
import { Container } from '@chakra-ui/react';
import Header from './components/header';
import Proyectos from './components/proyectos';
const App = () => {
  return (
    <Container className="App" maxW="full">
      <Header />
      <Proyectos />
    </Container>
  );
};

export default App;
