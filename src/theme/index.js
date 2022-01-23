import { extendTheme } from '@chakra-ui/react';

const config = {
  initialModeColor: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  fonts: {
    heading: 'ubuntu',
    coda: 'Coda'
  }
});

export default theme;
