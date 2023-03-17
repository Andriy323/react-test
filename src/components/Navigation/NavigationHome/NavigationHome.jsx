import { NavLink } from 'react-router-dom';
import style from './navigation-home.module.css';
import imgPhone from "../../../img/phone-book.png"
const getClassName = ({ isActive }) => {
  const className = isActive ? `${style.link} ${style.active}` : style.link;
  return className;
};
const NavigationHome = () => {
  return (
    <>
      <NavLink to="/" className={getClassName}>
        <img src={imgPhone} alt="Logo phonebooks" width="50" />
      </NavLink>
    </>
  );
};

export default NavigationHome;
