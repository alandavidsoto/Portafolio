import React from 'react';
import { Container } from '@chakra-ui/react';
import Header from './components/header';
const App = () => {
  return (
    <Container className="App" maxW="full">
      <Header />
    </Container>
  );
};

export default App;
