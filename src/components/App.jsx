import Navigation from './Navigation/Navigation';
import UseRoutes from './UseRoutes';

import style from './App.module.css';
const App = () => {
  return (
    <div className={style.appContainer}>
      <Navigation />
      <UseRoutes />
    </div>
  );
};

export default App;
