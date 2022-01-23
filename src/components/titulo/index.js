import { LinkIcon } from '@chakra-ui/icons';
import { Heading, Icon, IconButton } from '@chakra-ui/react';
import React from 'react';

const Titulo = ({ texto }) => {
  return (
    <Heading size="xl" mb={8} mt="20" /* color="purple.500" */>
      {texto}
    </Heading>
  );
};

export default Titulo;
