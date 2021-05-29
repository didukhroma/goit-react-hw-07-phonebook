import { createReducer } from '@reduxjs/toolkit';
// import actions from './contacts-actions';
import {
  fetchContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
} from './contacts-actions';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

const contactsReducer = createReducer(INITIAL_STATE, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default contactsReducer;
