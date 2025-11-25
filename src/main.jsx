import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import ProductPage from './pages/ProductPage.jsx'

const router = createBrowserRouter([{
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/menu',
        element: <MenuPage />,
        children: [
          {
            path: '/product/productId',
            element: <ProductPage />
          }
        ]
      }
    ]
}])

createRoot(document.getElementById('root')).render(<App />)
