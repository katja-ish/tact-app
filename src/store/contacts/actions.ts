import { createAction } from 'redux-act';
import Contacts from 'react-native-contacts';

export const setContacts = createAction<Contacts.Contact[]>('Set contacts');
