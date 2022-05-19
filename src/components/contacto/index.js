import {
  Box,
  Button,
  Divider,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Textarea
} from '@chakra-ui/react';
import React from 'react';
import Titulo from '../titulo';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Slide } from 'react-reveal';
const Contacto = () => {
  return (
    <Slide left>
      <Box p={5}>
        <a name="contacto"></a>
        <Titulo texto="Contacto" />
        <Formik
          initialValues={{
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            consulta: ''
          }}
          validationSchema={yup.object({
            nombre: yup
              .string()
              .required('No puedes dejar el campo email vacío'),
            apellido: yup
              .string()
              .required('No puedes dejar el campo email vacío'),
            email: yup
              .string()
              .email('Introduzca un email válido')
              .required('No puedes dejar el campo email vacío'),
            telefono: yup.number().integer().required(),
            consulta: yup
              .string()
              .required('No puedes dejar el campo email vacío')
          })}
          onSubmit={(form) => {
            console.log(form);
          }}
        >
          {({ handleChange }) => (
            <Form>
              <Grid
                templateColumns={{
                  base: '1fr',
                  lg: 'repeat(2,1fr)'
                }}
                columnGap={'4'}
              >
                <GridItem
                  mb={4}
                  colSpan={{
                    base: '2',
                    lg: '1'
                  }}
                >
                  <FormLabel htmlFor="nombre">Nombre</FormLabel>
                  <Field
                    as={Input}
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Introduzca su Nombre"
                  />
                </GridItem>
                <GridItem
                  mb={4}
                  colSpan={{
                    base: '2',
                    lg: '1'
                  }}
                >
                  <FormLabel htmlFor="apellido">Apellido</FormLabel>
                  <Field
                    as={Input}
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="Introduzca su Apellido"
                  />
                </GridItem>
                <GridItem
                  mb={4}
                  colSpan={{
                    base: '2',
                    lg: '1'
                  }}
                >
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Field
                    as={Input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </GridItem>
                <GridItem
                  mb={4}
                  colSpan={{
                    base: '2',
                    lg: '1'
                  }}
                >
                  <FormLabel htmlFor="telefono">Télefono</FormLabel>
                  <Field
                    as={Input}
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="Intruzca su numero de telefono/celular"
                  />
                </GridItem>
                <GridItem mb={4} colSpan={2}>
                  <FormLabel htmlFor="consulta">Consulta</FormLabel>
                  <Textarea
                    id="consulta"
                    name="consulta"
                    onChange={handleChange}
                    placeholder="¿En que te puedo ayudar?"
                    resize="none"
                    style={{ height: '150px' }}
                    gridColumn={'2'}
                  ></Textarea>
                </GridItem>
                <GridItem
                  mt={4}
                  colSpan={2}
                  display={'flex'}
                  justifyContent={'center'}
                >
                  <Button w="36" type="submit">
                    Enviar
                  </Button>
                </GridItem>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Slide>
  );
};

export default Contacto;
