import { createReducer } from 'redux-act';
import { setContacts } from './actions';
import { IContactsStore } from './types';

const initialState: IContactsStore = { list: [] };

const reducer = createReducer({}, initialState);

reducer.on(setContacts, (state, payload) => ({ ...state, list: payload }));

export default reducer;
