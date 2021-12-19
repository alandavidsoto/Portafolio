import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text
} from '@chakra-ui/react';
import React from 'react';

const MenuMobile = ({ toggleColorMode }) => {
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
          <MenuItem>
            <Link href="#sobreMi">¿Quien Soy?</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#proyectos">Proyectos</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#CV">Descarga mi CV</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#contacto">Contacto</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Box>
        <Text fontFamily="mono" fontSize="2xl">
          <Link href="#" style={{ textDecoration: 'none' }}>
            Alan David Soto
          </Link>
        </Text>
      </Box>
      <Box>
        <SunIcon />
        &nbsp;
        <Switch size="md" onChange={toggleColorMode}></Switch>
        &nbsp;
        <MoonIcon />
      </Box>
    </>
  );
};

export default MenuMobile;
