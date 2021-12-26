import './habilidades.scss';
import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';

import React from 'react';
import {
  SiBitbucket,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMysql,
  SiReact,
  SiSass
} from 'react-icons/si';
const Habilidades = () => {
  const tecnologias = [
    { nombre: 'HTML', component: SiHtml5 },
    { nombre: 'Bitbucket', component: SiBitbucket },
    { nombre: 'Git', component: SiGit },
    { nombre: 'Jira', component: SiJira },
    { nombre: 'CSS', component: SiCss3 },
    { nombre: 'MySQL', component: SiMysql },
    { nombre: 'Javascript', component: SiJavascript },
    { nombre: 'React', component: SiReact },
    { nombre: 'Sass', component: SiSass }
  ];
  return (
    <div>
      <Heading size="2xl" my={5}>
        Tecnologias
      </Heading>
      <Flex
        wrap="wrap"
        columnGap="20px"
        rowGap="20px"
        justifyContent="center"
        mb={5}
        maxW="1300px"
        mx="auto"
      >
        {tecnologias.map((Icon) => (
          <IconButton
            width={[100, 150, 200]}
            height={[100, 150, 200]}
            key={Icon.nombre}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              /* fontSize={['md', '2xl']} */
            >
              <Icon.component
                className="icon-skill"
                color="#444"
                title={Icon.nombre}
              />
              <Text mt={2} fontSize={['md', 'lg', 'xl']}>
                {Icon.nombre}
              </Text>
            </Box>
          </IconButton>
        ))}
      </Flex>
    </div>
  );
};

export default Habilidades;
