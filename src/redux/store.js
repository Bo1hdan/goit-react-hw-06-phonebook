import { contactFormReducer } from 'redux/contactFormReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: contactFormReducer,
});
