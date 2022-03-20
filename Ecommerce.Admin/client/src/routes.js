import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Index'
import CategoryList from './pages/AdminPages/Category'
import AddCategory from './pages/AdminPages/Category/AddCategory'
import Home from './pages/Home'
import ProductList from './pages/AdminPages/Product/index';
import AddProduct from './pages/AdminPages/Product/AddProduct'
import ViewCategory from './pages/AdminPages/Category/ViewCategory'
import ViewProduct from './pages/AdminPages/Product/ViewProduct'
import UpdateCategory from './pages/AdminPages/Category/UpdateCategory'
import NotFound from './pages/page404'
import Forbidden  from './pages/page403'
import CallbackPage from './components/Callback'
import User from './pages/AdminPages/User'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/admin/dashboard" />,
    },
    {
      path: '/admin',
      element: <Dashboard />,
      children: [
        {
          path: 'dashboard',
          element: <Home />,
        },
        {
          path: "product",
          element: <ProductList/>
        },
        {
          path: "category",
          element: <CategoryList/>
        },
        {
          path: "user",
          element: <User/>
        },
        {
          path: "403",
          element: <Forbidden/>
        },
        {
          path: "404",
          element: <NotFound/>
        }
      ],
    },
    {
      path: "/admin/product",
      element: <Dashboard/>,
      children: [
        {
          path: 'create',
          element: <AddProduct />,
        },
        {
          path: 'view',
          element: <ViewProduct/>
        }
       
      ]
    },
    { path: '/callback', element: <CallbackPage /> },
    {
      path: "/admin/category",
      element: <Dashboard/>,
      children: [
        {
          path: 'create',
          element: <AddCategory />,
        },
        {
          path: 'view',
          element: <ViewCategory />,
        },
        {
          path: 'edit',
          element: <UpdateCategory/>
        }
      ]
    },

    // { path: '*', element: <Navigate to="/admin/404" replace /> }
  ])
}
