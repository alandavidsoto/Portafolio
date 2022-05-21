import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Fade } from 'react-reveal';

const Inicio = () => {
  return (
    <Box
      as="section"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={5}
    >
      <Text
        fontSize={['6xl', '8xl', '9xl']}
        fontFamily="ubuntu"
        align="center"
        color="purple.400"
      >
        <Fade left cascade>
          Hola
        </Fade>
      </Text>
      <Text fontSize={['xl', '2xl', '4xl']} align="center" fontFamily="coda">
        <Fade left cascade>
          Me llamo Alan David Soto y me dedico al Desarrollo Web Front-end
        </Fade>
      </Text>
      <Flex justifyContent="center" gap={4} mt={4}>
        <Fade left cascade>
          <Link
            href="http://www.linkedin.com/in/alandavidsoto"
            target="_blank"
            style={{ textDecoration: 'none' }}
            position="relative"
            className="underDinamic"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <SiLinkedin size="2em" />
            <Text>Linkedin</Text>
          </Link>
          <Link
            href="https://github.com/alandavidsoto"
            target="_blank"
            style={{ textDecoration: 'none' }}
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="relative"
            className="underDinamic"
          >
            <SiGithub size="2em" />
            <Text>Github</Text>
          </Link>
        </Fade>
      </Flex>
    </Box>
  );
};

export default Inicio;
