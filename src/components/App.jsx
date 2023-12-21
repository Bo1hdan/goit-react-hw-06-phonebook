import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  selectContactForm,
  setContacts,
} from 'redux/contactFormReducer';

import { selectFilter, setFilter } from 'redux/filterReducer';

const App = () => {
  const contacts = useSelector(selectContactForm);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleAddContact = values => {
    const { name, number } = values;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact with the name "${name}" already exists!`);
    } else {
      const newContact = {
        name,
        number,
        id: nanoid(),
      };

      dispatch(setContacts([...contacts, newContact]));
    }
  };

  const handleFilterChange = filterValue => {
    dispatch(setFilter(filterValue));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  // useEffect(() => {
  //   const contactsFromLocalStorage = JSON.parse(
  //     localStorage.getItem('contacts')
  //   );

  //   if (contactsFromLocalStorage) {
  //     dispatch(setContacts(contactsFromLocalStorage));
  //   } else {
  //     dispatch(setContacts([]));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   if (contacts !== null) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
