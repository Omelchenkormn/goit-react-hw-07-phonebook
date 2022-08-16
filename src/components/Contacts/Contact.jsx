import React from 'react';
import { Container } from './Contact.styled';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsSlice';
import Loader from 'components/Loader/Loader';
// import { Span, Button } from './ListItem.styled';
import { ClipLoader } from 'react-spinners';
// import { ListItem } from 'components/ListItem/ListItem';
// import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data = [], isFetching } = useFetchContactsQuery();
  const contacts = data;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const contacts = useSelector(state => state.contacts.item);
  // const filter = useSelector(state => state.contacts.filter);
  // const filteredContacts = (contacts, filter) => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  // const filterContacts = filteredContacts(contacts, filter);

  return (
    <Container>
      {isFetching && <Loader />}
      <ul>
        {/* <ListItem contacts={data} /> */}
        {contacts &&
          contacts.map(({ id, name, phone }) => (
            <li key={id}>
              <span>
                {name} : {phone}{' '}
                <button onClick={() => deleteContact(id)} disabled={isDeleting}>
                  {isDeleting && <ClipLoader size={10} />}
                  Delete
                </button>
              </span>
            </li>
          ))}
      </ul>
    </Container>
  );
};
export default ContactList;
