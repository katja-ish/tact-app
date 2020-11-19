import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import contacts from './contacts';

const rootReducer = combineReducers({ contacts });

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
