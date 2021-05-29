import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';


import contactReducer from './contacts/contacts-reducer';
// import filterReducer from './filter/filter-reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

const rootReducer = combineReducers({
  items: contactReducer,
});

const store = configureStore({
  reducer: {contacts : rootReducer},
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});


export default store;