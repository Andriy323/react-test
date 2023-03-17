import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { RestrictedRoute } from './RestrictedtRoute';
import { PrivateRoute } from './PrivateRoutes';
const RegisterPage = lazy(() => import('./page/register-page/RegisterPage'));
const ContactsPage = lazy(() => import('./page/contacts-page/ContactsPage'));
const LoginPage = lazy(() => import('./page/login-page/LoginPage'));
const HomePage = lazy(() => import('./page/home-page/HomePage'));

const UseRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UseRoutes;
