import { useSelector } from "react-redux";

const MainMenu = () => {
  const { items, status, categories } = useSelector((state) => state.products);
  if (status !== "succeeded") {
    return null;
  } else {
    return (
      <div className="px-20">
        <h1 className="text-3xl font-semibold mb-10">Menu</h1>
        <h2 className="text-2xl font-semibold mb-5">Drinks</h2>
        <hr className="border-zinc-300" />
        <div className="flex my-10 flex-wrap">
          {categories.map((cat, index) => {
            return (
              <div key={index} className="flex w-1/2 items-center">
                <div className="w-[75px] lg:w-[110px] rounded-full overflow-hidden">
                  <img src={items[3].img} alt={cat} className="w-full" />
                </div>
                <h3 className="text-md  mx-3">{cat}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default MainMenu;
