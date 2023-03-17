import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import ContactForm from 'components/Forms/ContactForms'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'
import { fetchContacts, addContacts } from 'redux/contactSlice';

import css from './contacts-page.module.css'
const ContactsPage = () => {

    const dispatch = useDispatch();
    const contactList = useSelector(state => state.contacts.contacts.items);
    const { error, isLoading } = useSelector(state => state.contacts.contacts);
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    const handleFormSubmit = (name, number) => {
      const inContact = Boolean(
        contactList.find(e => e.name.toUpperCase() === name.toUpperCase())
      );
      const inNumber = Boolean(contactList.find(e => e.number === number));
      if (inContact) return alert(`контакт ${name}  існує`);
      if (inNumber) return alert(`номер ${number}  існує`);
  
      dispatch(addContacts({ name, number }));
    };
    return (
        <div className={css.appContainer}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onHandleSubmit={handleFormSubmit} />
        {contactList.length > 0 && <Filter />}
  
        <h2 className={css.title}>Contacts</h2>
        {error && <p>Error: {error}</p>}
  
        {isLoading === true && <h2>Loading...</h2>}
        <ContactList />
      </div>
    )
}
export default ContactsPage