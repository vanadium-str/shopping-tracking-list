import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import BoughtItems from './routes/BoughtItems';
import ReceivedList from './routes/ReceivedList';
import { items } from './utils/items';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//localStorage.setItem("items", JSON.stringify(items));

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-3xl font-bold underline">Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    element: <BoughtItems />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/received",
    element: <ReceivedList />,
    errorElement: <ErrorPage />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
