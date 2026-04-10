import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-vc-light-grey">
        <div className="animate-pulse flex items-center gap-2 text-vc-blue">
          <div className="w-8 h-8 rounded-full bg-current opacity-20 transform scale-150"></div>
        </div>
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  );
}
