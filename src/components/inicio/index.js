import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Inicio = () => {
  return (
    <Box
      as="section"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Text
        fontSize={['6xl', '8xl', '9xl']}
        fontFamily="ubuntu"
        align="center"
        color="purple.400"
      >
        Hola
      </Text>
      <Text fontSize={['xl', '2xl', '4xl']} align="center" fontFamily="coda">
        Me llamo Alan David Soto y me dedico al Desarrollo Web Front-end
      </Text>
      <Flex justifyContent="center" gap={4}>
        <SiLinkedin size="2em" />
        <SiGithub size="2em" />
      </Flex>
    </Box>
  );
};

export default Inicio;
