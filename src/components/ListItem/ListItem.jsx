import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Span, Button } from './ListItem.styled';
import { ClipLoader } from 'react-spinners';

export const ListItem = ({ contacts }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      {contacts &&
        contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <Span>
              {name} : {phone}{' '}
              <Button onClick={() => deleteContact(id)} disabled={isDeleting}>
                {isDeleting && <ClipLoader size={10} />}
                Delete
              </Button>
            </Span>
          </li>
        ))}
    </>
  );
};
