import { authInstance } from './authServices';

export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const deleteContact = id => authInstance.delete(`/contacts/${id}`);

