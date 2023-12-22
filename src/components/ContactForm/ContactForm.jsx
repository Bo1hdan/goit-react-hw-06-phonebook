import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContactForm, setContacts } from 'redux/contactFormReducer';

import css from 'components/ContactForm/ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactForm);

  const handleAddContact = (values, { resetForm }) => {
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

    resetForm();
  };

  return (
    <div className={css.formWrap}>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleAddContact}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field
              type="text"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};

export default ContactForm;
