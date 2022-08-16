import { Title, List, Span, Button, IconSVG } from './ListItem.styled';
import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';

export const ListItem = () => {
  const { data = [] } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const contacts = data;
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterContacts = filteredContacts(contacts, filter);

  return (
    <>
      <Title>Contacts</Title>
      {filterContacts &&
        filterContacts.map(({ id, name, phone }) => (
          <List key={id}>
            <Span>
              {name} : {phone}{' '}
            </Span>
            <Button onClick={() => deleteContact(id)} disabled={isDeleting}>
              {isDeleting && <ClipLoader size={10} />}
              <IconSVG />
            </Button>
          </List>
        ))}
    </>
  );
};
