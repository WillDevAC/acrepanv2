import { createBrowserRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { HomePage } from './pages/app/home/home'
import { ViewLayout } from './pages/_layouts/view'
import { MyCartPage } from './pages/app/views/my-cart-page'

import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/home',
        element: (
          <TransitionGroup>
            <CSSTransition key="home" classNames="slide" timeout={300}>
              <HomePage />
            </CSSTransition>
          </TransitionGroup>
        ),
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
        element: (
          <TransitionGroup>
            <CSSTransition key="signin" classNames="slide" timeout={300}>
              <SignIn />
            </CSSTransition>
          </TransitionGroup>
        ),
      },
      {
        path: '/sign-up',
        element: (
          <TransitionGroup>
            <CSSTransition key="signup" classNames="slide" timeout={300}>
              <SignUp />
            </CSSTransition>
          </TransitionGroup>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <ViewLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/my-cart', 
        element: (
          <TransitionGroup>
            <CSSTransition key="mycart" classNames="slide" timeout={300}>
              <MyCartPage />
            </CSSTransition>
          </TransitionGroup>
        ), 
      },
    ],
  },
])
