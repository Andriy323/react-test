import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
const ContactList = () => {
  const contactListItem = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filterContact = contactListItem.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();

  return filterContact.length === 0 ? (
    <p>There is no contact list</p>
  ) : (
    <ul className={css.list}>
      {filterContact.map(({ name, id, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}{' '}
          <button
            className={css.btnDelete}
            onClick={() => dispatch(deleteContact(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
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
