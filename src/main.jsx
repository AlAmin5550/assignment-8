import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componemts/Root/Root';
import Error from './componemts/Error/Error';
import Home from './componemts/Home/Home';
import ListedBooks from './componemts/ListedBooks/ListedBooks';
import Pages from './componemts/Pages/Pages';
import BookDetails from './componemts/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'/listed',
        loader:()=>fetch('books.json'),
        element:<ListedBooks></ListedBooks>
      },
      {
        path: '/pages',
        loader: () => fetch('books.json'),
        element:<Pages></Pages>
      },
      {
        path: '/book/:bookId',
        loader: () => fetch('books.json'),
        element:<BookDetails></BookDetails>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
