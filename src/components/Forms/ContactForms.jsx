import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../Forms/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.contacts);

  const idName = nanoid();
  const idNumber = nanoid();

  const hendleSubmit = e => {
    e.preventDefault();

    const inContact = Boolean(
      contact.find(e => e.name.toUpperCase() === name.toUpperCase())
    );
    if (inContact) return alert(`контакт ${name}  існує`);

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  return (
    <div className={css.formContainer}>
      <form onSubmit={hendleSubmit} className={css.form}>
        <label className={css.label} htmlFor={idName}>
          Name
        </label>
        <input
          id={idName}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label className={css.label} htmlFor={idNumber}>
          Number
        </label>
        <input
          id={idNumber}
          type="number"
          name="number"
          onChange={handleChange}
          value={number}
        />
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

ContactForm.prototypes = {
  hendleSubmit: PropTypes.func,
};
