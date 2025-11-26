import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListMenu = () => {
  const { categories } = useSelector((state) => state.products);

  return (
    <div className="font-semibold tracking-wide hidden w-[500px] lg:block">
      <h3 className="text-xl font-semibold tracking-wide mb-4">Drinks</h3>
      <ul>
        {categories.map((cat, index) => (
          <Link key={index} className="text-zinc-500 mb-4 block">{cat}</Link>
        ))}
      </ul>
    </div>
  );
};

export default ListMenu;
