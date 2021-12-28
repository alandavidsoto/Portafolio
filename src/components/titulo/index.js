import { Heading } from '@chakra-ui/react';
import React from 'react';

const Titulo = ({ texto }) => {
  return (
    <Heading size="2xl" my={5} color="purple.500">
      {texto}
    </Heading>
  );
};

export default Titulo;
