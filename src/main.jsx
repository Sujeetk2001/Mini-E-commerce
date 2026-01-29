import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import AddItems from './components/AddItems.jsx'
import SingleProduct from './components/SingleProduct.jsx'
import { MydataProvider } from './components/ContextApi.jsx'

const routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <SingleProduct />
      },
      {
        path: '/addItems',
        element: <AddItems />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
  <MydataProvider>
  <RouterProvider router={routing}/>
  </MydataProvider>
  </>
  
 ,
)
