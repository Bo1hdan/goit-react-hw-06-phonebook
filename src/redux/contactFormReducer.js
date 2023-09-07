import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactFormSlice = createSlice({
  name: 'contactForm',

  initialState: initialState,

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

export const contactFormReducer = contactFormSlice.reducer;
