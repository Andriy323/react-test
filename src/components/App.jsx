import Filter from './Filter/Filter';
import ContactForm from './Forms/ContactForms';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <Filter />

      <h2 className={css.title}>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
