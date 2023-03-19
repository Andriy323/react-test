import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from 'redux/currencySlice';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';
const getClassName = ({ isActive }) => {
  const className = isActive ? `${style.link} ${style.active}` : style.link;
  return className;
};
const Navigation = () => {
  const value = useSelector(state => state.currency.currency)
  const dispatch = useDispatch();
  return (
    <nav className={style.navLink}>
      <NavLink to="/" className={getClassName}>
        Home
      </NavLink>

      <NavLink to="/converter" className={getClassName}>
        Converter
      </NavLink>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Currency"
          onChange={e => dispatch(setCurrency(e.target.value))}
        >
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
    </nav>
  );
};
export default Navigation;
