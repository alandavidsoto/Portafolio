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
import { Slide } from 'react-reveal';

const MiCV = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Slide left>
      <Box p={5}>
        <a name="CV"></a>
        <Titulo texto="Mi CV" />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap={2}
        >
          <Image src={logo} width="60%" height="70%" onClick={onOpen} />
          <Button
            as={Link}
            href={CV_PDF}
            download="Alan Soto CV"
            width="300px"
            mt={2}
            style={{ textDecoration: 'none' }}
          >
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
    </Slide>
  );
};

export default MiCV;
