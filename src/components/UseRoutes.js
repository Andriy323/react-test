import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

const ConverterPage = lazy(() => import('./page/converter-page/ConverterPage'));
const HomePage = lazy(() => import('./page/home-page/HomePage'));

const UseRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/converter" element={<ConverterPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UseRoutes;
