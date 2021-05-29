// import { v4 as genId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = createAction('contact/add', (name, number) => ({
//   payload: {
//     id: genId(),
//     name,
//     number,
//   },
// }));
// const deleteContact = createAction('contact/delete');

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { addContact, deleteContact };

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// export const changeFilter = createAction('contacts/changeFilter');
