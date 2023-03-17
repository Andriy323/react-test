import { useEffect } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import style from 'components/Modal/modal.module.css';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ close, contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const modalClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', modalClose);
    return () => {
      document.removeEventListener('keydown', modalClose);
    };
  });
  const { id } = contact;
  const idName = nanoid();
  const idNumber = nanoid();
  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(editContact({ id, name, number }));
    setName('');
    setNumber('');
    close();
  };
  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };
  return createPortal(
    <div className={style.overlay} onClick={modalClose}>
      <div className={style.modal}>
        <button className={style.btnClose} onClick={modalClose}>X</button>
        <h1 className={style.title}>Edit contact</h1>
        <form onSubmit={hendleSubmit} className={style.form}>
          <label className={style.label} htmlFor={idName}>
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
          <label className={style.label} htmlFor={idNumber}>
            Number
          </label>
          <input
            id={idNumber}
            type="phone"
            name="number"
            onChange={handleChange}
            value={number}
          />
          <button className={style.btnAdd} type="submit">
            Edit contact
          </button>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
Modal.prototypes = {
    close: PropTypes.func,
    contact: PropTypes.object,
  };
  