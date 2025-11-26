import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SiteLauout from "./pages/SiteLauout.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLauout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
        children: [
          {
            path: "menu/product/productId",
            element: <ProductPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <RouterProvider router={router} />
  </Provider>
);
