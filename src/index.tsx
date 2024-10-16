import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes } from './types';
import ErrorPage from './pages/ErrorPage';
import BoughtItems from './pages/BoughtItems';
import ReceivedList from './pages/ReceivedList';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
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
        element: <HomePage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
