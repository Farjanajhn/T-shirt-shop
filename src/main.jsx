import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main/Main';
import OrderReview from './components/OrderReview/OrderReview';
import About from './components/Layout/About/About';
import Contact from './components/Layout/Contact/Contact';
import Roots from './components/Roots/Roots';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader :()=> fetch('tshirts.json')
      },
      {
        path: 'review',
        element: <OrderReview></OrderReview>

      },
      {
        path: 'about',
        element:<About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'roots',
        element: <Roots></Roots>
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
