import { extendTheme } from '@chakra-ui/react';

const config = {
  initialModeColor: 'light',
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  fonts: {
    /* heading: 'Coda', */
    coda: 'Coda'
  }
});

export default theme;
