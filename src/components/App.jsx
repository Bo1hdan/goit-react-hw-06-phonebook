import React, { useEffect, useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const App = () => {
  // const [contacts, setContacts] = useState([]);

  // const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contactsForm.contact);
  const filter = useSelector(state => state.contactsForm.filter);
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
      // setContacts(prevContacts => [...prevContacts, newContact]);
      dispatch({
        type: 'contactForm/setContacts',
        payload: [...contacts, newContact],
      });
    }
  };

  const handleFilterChange = filterValue => {
    // setFilter(filterValue);
    dispatch({
      type: 'contactsForm/setFilter',
      payload: filterValue,
    });
  };

  const handleDeleteContact = contactId => {
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== contactId)
    // );
    dispatch({
      type: 'contactForm/deleteContact',
      payload: contactId,
    });
  };

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse(
      localStorage.getItem('contacts')
    );

    if (contactsFromLocalStorage) {
      // setContacts(contactsFromLocalStorage);
      dispatch({
        type: 'contactForm/setContacts',
        payload: contactsFromLocalStorage,
      });
    } else {
      // setContacts([]);
      dispatch({
        type: 'contactForm/setContacts',
        payload: [],
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (contacts !== null) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

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
