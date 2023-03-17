import Navigation from './Navigation/Navigation';
import UseRoutes from './UseRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from '../redux/autchSlice';
import { useAuth } from 'redux/select/useAutch';
const App = () => {
  const dispatch = useDispatch();
  const { loading } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Navigation />
      <UseRoutes />
    </>
  );
};

export default App;
