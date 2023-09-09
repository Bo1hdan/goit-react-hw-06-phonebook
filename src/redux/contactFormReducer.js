import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

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

    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

export const { setContacts, deleteContact } = contactFormSlice.actions;

// export const selectContactForm = state => state.contactsForm.contacts;
// export const selectContactForm = state => state.contactForm.contacts;

export const selectContactForm = state => state.contacts.contacts;

export const contactFormReducer = contactFormSlice.reducer;

// const persistConfig = {
//   key: 'contactsForm',
//   storage,
// };

// export const contactFormReducer = contactFormSlice.reducer;

// export const contactFormPersistedReducer = persistReducer(
//   persistConfig,
//   contactFormReducer
// );
