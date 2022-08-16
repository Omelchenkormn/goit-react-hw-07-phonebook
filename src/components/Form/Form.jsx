import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, Label, Input, Forms, Error } from './Form.styled';
import { useCreateContactMutation } from 'redux/contacts/contactsSlice';
import Loader from 'components/Loader/Loader';

const initialValues = {
  name: '',
  number: '',
};
const validSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .typeError('Должно быть строкой')
    .required('Required'),
  number: yup.string().min(6).max(12).required('Required'),
});

const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleSubmit = (initialValues, { resetForm }) => {
    const { name, number } = initialValues;
    createContact(name, number);

    // if (isAdded(name)) {
    //   return alert(`${name} is already in contacts`);
    // } else {
    //   addContact(name, number);
    // }
    resetForm();
  };
  // const isAdded = name => contacts.map(contact => contact.name).includes(name);

  return (
    <Formik
      validationSchema={validSchema}
      validateOnBlur={true}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Forms autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <Error>
            <ErrorMessage name="name" />{' '}
          </Error>
        </Label>
        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <Error>
            <ErrorMessage name="number" />
          </Error>
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader />}
          Add contact
        </Button>
      </Forms>
    </Formik>
  );
};

export default ContactForm;
