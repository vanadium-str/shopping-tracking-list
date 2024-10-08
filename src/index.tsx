import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import BoughtItems from './pages/BoughtItems';
import ReceivedList from './pages/ReceivedList';
import Layout from './components/Layout';
import { Routes } from './types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//localStorage.setItem("items", JSON.stringify(items));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.List,
        element: <BoughtItems />,
      },
      {
        path: Routes.Received,
        element: <ReceivedList />,
      },
      {
        index: true,
        element: <div>Hello world!</div>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
