import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filter: '',
};

const contactFormSlice = createSlice({
  name: 'contactsForm',

  initialState,

  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setContacts, deleteContact, setFilter } =
  contactFormSlice.actions;

export const selectContactForm = state => state.contactsForm.contacts;
export const selectFilter = state => state.contactsForm.filter || '';

const persistConfig = {
  key: 'contactsForm',
  storage,
};

export const contactFormReducer = contactFormSlice.reducer;

export const contactFormPersistedReducer = persistReducer(
  persistConfig,
  contactFormReducer
);
