import { useDispatch, useSelector } from "react-redux";
import productReducer, {
  populateCategories,
} from "../state/products/productsSlice";
import { useEffect } from "react";

const MenuPage = () => {
  let { items, status, categories } = useSelector((state) => state.products);


  return <div>Menu</div>;
};

export default MenuPage;
