import {
  Box,
  Button,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
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
            nombre: yup.string().required('Escriba su nombre'),
            apellido: yup.string().required('No puedes dejar este campo vacío'),
            email: yup
              .string()
              .email('Introduzca un email válido')
              .required('Debes ingresar un email'),
            telefono: yup
              .number('Solo se permite numeros')
              .typeError('Solo se permite numeros')
              .required('Digite su teléfono'),
            consulta: yup.string().required('Escriba su mensaje')
          })}
          onSubmit={(formData, actions) => {
            actions.resetForm();
          }}
        >
          {({ handleChange, errors, touched }) => (
            <Form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <Grid
                templateColumns={{
                  base: '1fr',
                  lg: 'repeat(2,1fr)'
                }}
                columnGap={'4'}
                rowGap={'3'}
              >
                <GridItem
                  mb={4}
                  colSpan={{
                    base: '2',
                    lg: '1'
                  }}
                  position={'relative'}
                >
                  <FormLabel htmlFor="nombre">Nombre</FormLabel>
                  <Field
                    as={Input}
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Introduzca su Nombre"
                  />
                  {errors.nombre && touched.nombre && (
                    <Text
                      fontSize={'sm'}
                      color={'red.300'}
                      position={'absolute'}
                    >
                      {errors.nombre}
                    </Text>
                  )}
                </GridItem>
                <GridItem
                  mb={4}
                  colSpan={{
                    base: '2',
                    lg: '1'
                  }}
                  position={'relative'}
                >
                  <FormLabel htmlFor="apellido">Apellido</FormLabel>
                  <Field
                    as={Input}
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="Introduzca su Apellido"
                  />
                  {errors.apellido && touched.apellido && (
                    <Text
                      fontSize={'sm'}
                      color={'red.300'}
                      position={'absolute'}
                    >
                      {errors.apellido}
                    </Text>
                  )}
                </GridItem>
                <GridItem
                  mb={4}
                  colSpan={{
                    base: '2',
                    lg: '1'
                  }}
                  position={'relative'}
                >
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Field
                    as={Input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                  {errors.email && touched.email && (
                    <Text
                      fontSize={'sm'}
                      color={'red.300'}
                      position={'absolute'}
                    >
                      {errors.email}
                    </Text>
                  )}
                </GridItem>
                <GridItem
                  mb={4}
                  colSpan={{
                    base: '2',
                    lg: '1'
                  }}
                  position={'relative'}
                >
                  <FormLabel htmlFor="telefono">Télefono</FormLabel>
                  <Field
                    as={Input}
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="Intruzca su numero de telefono/celular"
                  />
                  {errors.telefono && touched.telefono && (
                    <Text
                      fontSize={'sm'}
                      color={'red.300'}
                      position={'absolute'}
                    >
                      {errors.telefono}
                    </Text>
                  )}
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
                    position={'relative'}
                  ></Textarea>
                  {errors.consulta && touched.consulta && (
                    <Text
                      fontSize={'sm'}
                      color={'red.300'}
                      position={'absolute'}
                    >
                      {errors.consulta}
                    </Text>
                  )}
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
