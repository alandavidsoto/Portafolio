import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      h={'60px'}
      bg="blackAlpha.400"
      display={'flex'}
      justifyContent="center"
      alignItems={'center'}
    >
      <Text fontSize={'sm'}>
        <Text as="span"></Text> Página web creada por{' '}
        <Link
          href="https://www.linkedin.com/in/alandavidsoto"
          target={'_blank'}
          style={{ textDecoration: 'none' }}
          _hover={{ color: '#f3f' }}
        >
          Alan David Soto
        </Link>
        .
      </Text>
    </Box>
  );
};

export default Footer;
