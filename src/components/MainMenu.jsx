import { useSelector } from "react-redux";

const MainMenu = () => {
  const { items, status, categories } = useSelector((state) => state.products);
  if (status !== "succeeded") {
    return null;
  } else {
    return (
      <div className="flex">
        {categories.map((cat, index) => {
          return (
            <div key={index}>
              <img src={items[index].img} alt={cat} />
              <h3>{cat}</h3>
            </div>
          );
        })}
      </div>
    );
  }
};

export default MainMenu;
