import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import SiteLauout from './pages/SiteLauout.jsx'

const router = createBrowserRouter([{
    path: '/',
    element: <SiteLauout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/menu',
        element: <MenuPage />,
        children: [
          {
            path: 'menu/product/productId',
            element: <ProductPage />
          }
        ]
      }
    ]
}])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
