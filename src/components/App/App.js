import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './GlobalStyle';
import UserRoutes from 'components/Routes/UserRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loader/>}
      {!isRefreshing && <UserRoutes />}
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};
