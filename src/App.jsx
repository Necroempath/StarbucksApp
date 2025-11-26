import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./state/products/productsSlice";
import { useEffect } from "react";
import { populateCategories

 } from "./state/products/productsSlice";
function App() {
  const { items, categories, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }

    if(status === 'failed'){
      console.log(error);
    }
  }, [status, dispatch, categories]);

  return null;
}

export default App;
