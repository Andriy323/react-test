import { useSelector, useDispatch } from 'react-redux';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import { deleteContact } from 'redux/contactSlice';
import { useModal } from 'helpers/hoks/useModal';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
const ContactList = () => {
  const contactListItem = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filterContact = contactListItem.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const { modalOpen, openModalState, closeModalState } = useModal();
  const dispatch = useDispatch();
  const [contact, setContact] = useState({});
  const openModal = contact => {
    setContact({ ...contact });

    openModalState();
    document.body.style.overflow = 'hidden';
  };
  const modalClose = () => {
    closeModalState();
    document.body.style.overflow = '';
  };
  return filterContact.length === 0 ? (
    <p>There is no contact list</p>
  ) : (
    <>
      {modalOpen && <Modal close={modalClose} contact={contact} />}

      <ul className={css.list}>
        {filterContact.map(({ name, id, number }) => (
          <li key={id} className={css.item}>
            <span>
               {name}: {number}
            </span>
           <div> <button
              className={css.btnDelete}
              onClick={() => openModal({ id, name, number })}
              type="button"
            >
              <FaEdit/>
            </button>
            <button
              className={css.btnDelete}
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
            <FaTrashAlt/> 
            </button></div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  removeContact: PropTypes.func,
  filterContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

ContactList.defaultProps = {
  filterContact: [],
};
