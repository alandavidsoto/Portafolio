import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Text, Link, Switch } from '@chakra-ui/react';
import React from 'react';

const MenuDesktop = () => {
  return (
    <>
      <Box flex={4}>
        <Text fontSize="3xl">
          <Link href="#" style={{ textDecoration: 'none' }}>
            Alan David Soto
          </Link>
        </Text>
      </Box>

      <Box display="flex" justifyContent="space-between" flex={5}>
        <Text fontSize="lg">
          <Link href="#sobreMi" style={{ textDecoration: 'none' }}>
            Sobre Mi
          </Link>
        </Text>
        <Text fontSize="lg">
          <Link href="#tecnologias" style={{ textDecoration: 'none' }}>
            Tecnologias
          </Link>
        </Text>
        <Text fontSize="lg">
          <Link href="#proyectos" style={{ textDecoration: 'none' }}>
            Proyectos
          </Link>
        </Text>
        <Text fontSize="lg">
          <Link href="#contacto" style={{ textDecoration: 'none' }}>
            Contacto
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default MenuDesktop;
