import { nanoid } from 'nanoid/non-secure';
import { useState, useEffect } from 'react';
import  { useSelector, useDispatch } from "react-redux";
import { addContact } from 'redux/contactSlice';
import Filter from './Filter/Filter';
import ContactForm from './Forms/ContactForms';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // const contacts = useSelector(JSON.parse(window.localStorage.getItem('contacts')) ?? [])
  const [filters, setFilters] = useState('');
  
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const inAlert = Boolean(
  //     contacts.find(e => e.name.toUpperCase() === name.toUpperCase())
  //   );
  //   if (inAlert) return alert(`контакт ${name}  існує`);
  //   dispatch(addContact({name, number}))
  //   // const newContact = {
  //   //   name,
  //   //   id: nanoid(),
  //   //   number,
  //   // };
  //   // return setContacts([newContact, ...contacts]);
  // };

  const handleFilter = e => {
    setFilters(e.target.value);
  };

  // const filterContact = () => {
  //   if (!filters) return contacts;

  //   const normalizFilter = filters.toUpperCase();
  //   const res = contacts.filter(contact =>
  //     contact.name.toUpperCase().includes(normalizFilter)
  //   );
  //   return res;
  // };

  // const removeContact = id => {
  //   const newContacts = contacts.filter(item => item.id !== id);
  //   return setContacts(newContacts);
  // };

  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm  />
      {/* <ContactForm  onSubmit={addContacts}/> */}

      {/* {contacts.length !== 0 && (
        <Filter handleFilter={handleFilter} value={filters} />
      )} */}

      <h2 className={css.title}>Contacts</h2>
      <ContactList
        // filterContact={filterContact()}
        // removeContact={removeContact}
      />
    </div>
  );
};

export default App;
