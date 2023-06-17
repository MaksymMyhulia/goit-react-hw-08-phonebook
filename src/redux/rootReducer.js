import { combineReducers } from 'redux';

import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import persistedAuthReducer from './auth/authSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});