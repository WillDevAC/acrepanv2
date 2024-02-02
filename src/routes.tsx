import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { HomePage } from './pages/app/home/home'
import { ProductPage } from './pages/app/views/product-page'
import { ViewLayout } from './pages/_layouts/view'
import { MyCartPage } from './pages/app/views/my-cart-page'
import { MyOdersPage } from './pages/app/views/my-orders-page'
import { MyClubPage } from './pages/app/views/my-club-page'
import { PendingPurshasePage } from './pages/app/views/pending-purshase-page'
import { MyProfilePage } from './pages/app/views/my-profile-page'

import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { ViewOrderPage } from './pages/app/views/view-order-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/',
    element: <ViewLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/my-profile', 
        element: <MyProfilePage />, 
      },
      {
        path: '/product/:id', 
        element: <ProductPage />, 
      },
      {
        path: '/order/:id', 
        element: <ViewOrderPage />, 
      },
      {
        path: '/my-cart', 
        element: <MyCartPage />, 
      },
      {
        path: '/my-orders', 
        element: <MyOdersPage />, 
      },
      {
        path: '/my-club', 
        element: <MyClubPage />, 
      },
      {
        path: '/pending-purshase/:id', 
        element: <PendingPurshasePage />, 
      },
    ],
  },
])