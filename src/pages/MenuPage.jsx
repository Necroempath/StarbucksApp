import { useDispatch, useSelector } from "react-redux";
import ListMenu from "../components/ListMenu";
import MainMenu from "../components/MainMenu";

const MenuPage = () => {
  let { items, status, categories } = useSelector((state) => state.products);

  return (
<div className="container mx-auto flex px-4 md:px-8 lg:px-20 py-10 gap-8">
  <div className="hidden lg:block w-[300px] relative">
    <div className="sticky top-20">
      <ListMenu />
    </div>
  </div>

  <div className="flex-1">
    <MainMenu />
  </div>
</div>
  );
};

export default MenuPage;
