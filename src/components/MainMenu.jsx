import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const { items, status, categories } = useSelector((state) => state.products);

  if (status !== "succeeded") {
    return null;
  }

  return (
    <div className="px-10">
      <h1 className="text-3xl font-semibold mb-10">Menu</h1>
      <hr className="border-zinc-300" />

      {categories.map((cat) => {
        const filtered = items.filter((item) => item.subcategory === cat);

        return (
          <div id={`${cat}`} key={cat} className="w-full mb-10">
            <h3 className="text-2xl font-semibold mb-4">{cat}</h3>

            <div className="flex flex-wrap gap-2">
              {filtered.map((product) => (
                <Link to={`/product/${product.id}`}
                  key={product.id}
                  className="flex max-w-[400px] items-center mb-5 min-h-[90px]"
                >
                  <div className="w-[75px] h-[75px] xl:w-[110px] xl:h-[110px] rounded-full overflow-hidden shrink-0">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="text-md mx-3 break-words">{product.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainMenu;
