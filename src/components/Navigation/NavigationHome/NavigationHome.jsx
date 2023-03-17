import { NavLink } from 'react-router-dom';
import style from './navigation-home.module.css';
const getClassName = ({ isActive }) => {
  const className = isActive ? `${style.link} ${style.active}` : style.link;
  return className;
};
const NavigationHome = () => {
  return (
    <div>
      <NavLink to="/" className={getClassName}>
        Logo
      </NavLink>
    </div>
  );
};

export default NavigationHome;
