import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { filteredData } from '../../utils/filter';

const ContactList = ({ contacts=[], filter='' }) => {
  const filteredContacts = filteredData(contacts, filter);
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default ContactList;