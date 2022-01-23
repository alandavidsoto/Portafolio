import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import Titulo from '../titulo';
import logo from '../../alan.jpg';
import CV_PDF from '../../alansotoCV.pdf';

const MiCV = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={5}>
      <Titulo texto="Mi CV" />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap={2}
      >
        <Image src={logo} width="60%" height="70%" onClick={onOpen} />
        <Button as={Link} href={CV_PDF} download="Alan Soto CV" width="100%">
          Descargar CV
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Image src={logo} width="100%" height="100%" />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MiCV;
