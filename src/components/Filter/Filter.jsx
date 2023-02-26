import PropTypes from 'prop-types';
import css from './Filter.module.css'
const Filter = ({ handleFilter, value }) => {
  return (
    <div className={css.blocFilter}>
      <label>Filter</label>
      <input name="filter" onChange={handleFilter} value={value} />
    </div>
  );
};

export default Filter;

Filter.prototypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};
