import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Label,
  Input,
  Forms,
  Error,
  SvgIconProfile,
} from './Form.styled';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contactsApi';
import Loader from 'components/Loader/Loader';
import { IoIosContact } from 'react-icons/io';

const initialValues = {
  name: '',
  phone: '',
};
const validSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .typeError('Должно быть строкой')
    .required('Required'),
  phone: yup.string().min(6).max(12).required('Required'),
});

const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data = [] } = useFetchContactsQuery();
  const contacts = data;

  const handleSubmit = (initialValues, { resetForm }) => {
    const { name, phone } = initialValues;

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    } else {
      createContact({ name, phone });
      resetForm();
    }
  };

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
          <Input type="text" name="name" placeholder="Type your name" />
          <Error>
            <ErrorMessage name="name" />{' '}
          </Error>
        </Label>
        <Label htmlFor="phone">
          Phone
          <Input type="tel" name="phone" placeholder="Type your number" />
          <Error>
            <ErrorMessage name="phone" />
          </Error>
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader />}
          <SvgIconProfile />
        </Button>
      </Forms>
    </Formik>
  );
};

export default ContactForm;
