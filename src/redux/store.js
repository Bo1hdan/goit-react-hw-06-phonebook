import { combineReducers, createStore } from 'redux';
import { contactFormReducer } from 'redux/contactFormReducer';

const rootReducer = combineReducers({
  contactsForm: contactFormReducer,
});

export const store = createStore(rootReducer);
