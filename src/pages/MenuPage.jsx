import { useDispatch, useSelector } from "react-redux";
import ListMenu from "../components/ListMenu";
import MainMenu from "../components/MainMenu";


const MenuPage = () => {
  let { items, status, categories } = useSelector((state) => state.products);


  return <div className="container mx-auto flex
      px-16 md:px-18 lg:px-20 xl:px-22 py-10">
    <ListMenu />

    <MainMenu />
  </div>;
};

export default MenuPage;
