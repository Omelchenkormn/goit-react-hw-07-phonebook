import React from 'react';
import { Container } from './App.styled';
import { Apps } from './App.styled';
import ContactForm from 'components/Form/Form';
import ContactList from 'components/Contacts/Contact';
import Filter from 'components/FilterContact/Filter';

const App = () => {
  return (
    <Apps>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    </Apps>
  );
};
export default App;
