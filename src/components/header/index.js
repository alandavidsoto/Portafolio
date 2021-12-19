import { Box, useColorMode, useMediaQuery } from '@chakra-ui/react';
import theme from '../../theme';
import MenuDesktop from './desktop/MenuDesktop';
import MenuMobile from './mobile/MenuMobile';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  return (
    <Box
      padding="2"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      fontFamily={theme.fonts.coda}
    >
      {isLargerThan900 ? (
        <MenuDesktop toggleColorMode={toggleColorMode} />
      ) : (
        <MenuMobile toggleColorMode={toggleColorMode} />
      )}
    </Box>
  );
};

export default Header;
