import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import React from 'react';
import Titulo from '../titulo';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
const Contacto = () => {
  return (
    <Box>
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
          nombre: yup.string().required('No puedes dejar el campo email vacío'),
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
            <FormControl>
              <FormLabel htmlFor="nombre">Nombre</FormLabel>
              <Field
                as={Input}
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Email"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="apellido">Apellido</FormLabel>
              <Field as={Input} type="text" id="apellido" name="apellido" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Field as={Input} type="email" id="email" name="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="telefono">Télefono</FormLabel>
              <Field as={Input} type="tel" id="telefono" name="telefono" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="consulta">Consulta</FormLabel>
              <Textarea
                id="consulta"
                name="consulta"
                onChange={handleChange}
              ></Textarea>
            </FormControl>
            <Button mt={4} w="100%" type="submit">
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Contacto;
