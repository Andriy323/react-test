import Filter from './Filter/Filter';
import ContactForm from './Forms/ContactForms';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';

const App = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.contacts);

  const handleFormSubmit = (name, number) => {
    const inContact = Boolean(
      contactList.find(e => e.name.toUpperCase() === name.toUpperCase())
    );
    if (inContact) return alert(`контакт ${name}  існує`);

    dispatch(addContact({ name, number }));
  };
  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onHandleSubmit={handleFormSubmit} />

      <Filter />

      <h2 className={css.title}>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
