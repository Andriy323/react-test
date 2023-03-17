import NavigationAutch from './NavigationAutch/NavigationAutch.jsx';
import NavigationHome from './NavigationHome/NavigationHome.jsx';
import style from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={style.navLink}>
      <NavigationHome />
      <NavigationAutch />
    </nav>
  );
};
export default Navigation;
