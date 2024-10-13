import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import "preline/preline";

const MainPage = lazy(() => import('./pages/MainPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Page404 = lazy(() => import('./pages/Page404'));

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={
          <div class="min-h-screen flex justify-center items-center bg-white border shadow-sm rounded-xl">
            <div class="flex flex-col justify-center items-center p-4 md:p-5">
              <div class="flex justify-center">
                <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        }>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
