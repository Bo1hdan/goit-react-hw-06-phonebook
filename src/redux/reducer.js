import { combineReducers } from 'redux';
import { contactFormReducer } from 'redux/contactFormReducer';
import { filterReducer } from 'redux/filterReducer';

export const reducer = combineReducers({
  contacts: contactFormReducer,
  filter: filterReducer,
});
