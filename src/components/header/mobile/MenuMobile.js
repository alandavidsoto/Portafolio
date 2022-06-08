import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import React from 'react';

const MenuMobile = () => {
  const links = [
    {
      name: 'Sobre Mi',
      href: '#sobreMi'
    },
    {
      name: 'Tecnologias',
      href: '#tecnologias'
    },
    {
      name: 'Proyectos',
      href: '#proyectos'
    },
    {
      name: 'Mi CV',
      href: '#CV'
    },
    {
      name: 'Contacto',
      href: '#contacto'
    }
  ];
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />

        <MenuList>
          {links.map((el) => (
            <MenuItem key={el.name}>
              <Link
                href={el.href}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                  height: '100%'
                }}
              >
                {el.name}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Box>
        <Text fontFamily="coda" fontSize="2xl">
          <Link href="#" style={{ textDecoration: 'none' }}>
            Alan David Soto
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default MenuMobile;
