import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
} from './selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const loading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    loading,
  };
};
