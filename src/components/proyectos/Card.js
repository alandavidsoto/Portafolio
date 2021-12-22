import { Badge, Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { MdOutlinePhonelink } from 'react-icons/md';

const Card = ({ elemento }) => {
  const truncate = (text) =>
    text.length > 70 ? `${text.substring(0, 70)}...` : text;

  return (
    <Box
      overflow="hidden"
      boxShadow="base"
      rounded="base"
      w="100%"
      h="100%"
      borderRadius="base"
      maxW="360px"
      margin="0px auto"
    >
      <Box overflow="hidden">
        <Image src={elemento.imagen} w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box p={1}>
        <Box display="flex" flexWrap="wrap" alignItems="baseline" mt="1">
          {elemento.keywords.map((word) => (
            <Badge
              borderRadius="full"
              px="3"
              my="1"
              mx="1"
              colorScheme="cyan"
              key={word}
              fontSize="0.7em"
            >
              {word}
            </Badge>
          ))}
        </Box>
        <Box
          mt="2"
          fontWeight="semibold"
          as="h3"
          lineHeight="tall"
          isTruncated
          fontSize="xl"
        >
          {elemento.nombre}
        </Box>

        <Box>
          <Text>{truncate(elemento.descripcion)}</Text>
        </Box>
      </Box>
      <Flex justifyContent="space-around" alignItems="center" my="2">
        <Button
          leftIcon={<BsGithub />}
          as={Link}
          href={elemento.github_url}
          target="_blank"
          colorScheme="purple"
          variant="solid"
        >
          Codigo
        </Button>
        <Button
          as={Link}
          href={elemento.sitio_url}
          target="_blank"
          leftIcon={<MdOutlinePhonelink />}
          colorScheme="messenger"
          variant="solid"
        >
          Página
        </Button>
      </Flex>
    </Box>
  );
};

export default Card;
