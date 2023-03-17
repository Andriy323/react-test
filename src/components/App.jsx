import Navigation from './Navigation/Navigation';
import UseRoutes from './UseRoutes';



import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from '../redux/autchSlice';
import { useAuth } from 'redux/select/useAutch';
import style from './App.module.css'
const App = () => {
  const dispatch = useDispatch();
  const { loading } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
 
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className={style.appContainer}>
      
      <Navigation />
      <UseRoutes />
    </div>
  );
};

export default App;
