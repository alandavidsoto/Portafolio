import { Box, Text, Link } from '@chakra-ui/react';
import React from 'react';

const menuItems = [
  { href: '#sobreMi', text: 'Sobre Mi' },
  { href: '#tecnologias', text: 'Tecnologias' },
  { href: '#proyectos', text: 'Proyectos' },
  { href: '#contacto', text: 'Contacto' }
];
const MenuDesktop = () => {
  return (
    <>
      <Box flex={4}>
        <Text fontSize="3xl">
          <Link
            href="#"
            style={{ textDecoration: 'none' }}
            className="underDinamic"
            position={'relative'}
          >
            Alan David Soto
          </Link>
        </Text>
      </Box>

      <Box display="flex" justifyContent="space-between" flex={5}>
        {menuItems.map((item, index) => (
          <Text key={index} fontSize="lg">
            <Link
              href={item.href}
              className="underDinamic"
              style={{ textDecoration: 'none' }}
              position={'relative'}
            >
              {item.text}
            </Link>
          </Text>
        ))}
      </Box>
    </>
  );
};

export default MenuDesktop;
