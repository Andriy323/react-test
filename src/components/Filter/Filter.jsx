import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactSlice';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();
  const textInput = useSelector(state=>state.contacts.filter)

  const onSetFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={css.blocFilter}>
      <label>Filter</label>
      <input name="filter" onChange={onSetFilter} value={textInput}/>
    </div>
  );
};

export default Filter;

Filter.prototypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};
