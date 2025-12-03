import { useSelector, useDispatch, Provider } from "react-redux";
import { fetchProducts } from "./state/products/productsSlice";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLauout from "./pages/SiteLauout";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import BasketPage from "./pages/BasketPage.jsx";

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
      },
      {
        path: "/basket",
        element: <BasketPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
    ],
  },
]);

function App() {
  const { items, categories, status, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }

    if (status === "failed") {
      console.log(error);
    }
  }, [status, dispatch, categories]);

  if (status === "succeeded") {
    console.log(items);
    return (
      <RouterProvider router={router}>
        <SiteLauout />
      </RouterProvider>
    );
  } else if (status === "pending") {
    return;
  }
}

export default App;
