import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactFormSlice = createSlice({
  name: 'contacts',

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
  },
});

export const { setContacts, deleteContact } = contactFormSlice.actions;

export const selectContactForm = state => state.contacts.contacts;

export const contactFormReducer = contactFormSlice.reducer;
