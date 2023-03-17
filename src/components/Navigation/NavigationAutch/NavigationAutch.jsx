import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/select/useAutch.js';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/autchSlice';
import style from '../navigation.module.css';
const getClassName = ({ isActive }) => {
  const className = isActive ? `${style.link} ${style.active}` : style.link;
  return className;
};
const NavigationAutch = () => {
  const email = useSelector(state => state.autch.user.email);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  return (
    <div className={style.container}>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getClassName}>
          Contacts
        </NavLink>
      )}
      {isLoggedIn ? (
        <div className={style.contaonerContacts}>
          {' '}
          <h1 className={style.titleName}>Hello: {email}</h1>
          <button onClick={() => dispatch(logOutUser())} className={style.btn}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <NavLink to="/login" className={getClassName}>
            Login
          </NavLink>

          <NavLink to="/register" className={getClassName}>
            Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default NavigationAutch;
