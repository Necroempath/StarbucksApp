import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ListMenu = () => {
  const { categories } = useSelector((state) => state.products);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // высота триггера
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`font-semibold tracking-wide hidden w-[300px] lg:block transition-all ${
        fixed ? "fixed top-20" : "relative"
      }`}
    >
      <h3 className="text-xl font-semibold tracking-wide mb-4">Drinks</h3>
      <ul>
        {categories.map((cat, index) => (
          <a
            key={index}
            href={`#${cat}`}
            className="text-zinc-500 mb-4 block hover:text-zinc-700"
          >
            {cat}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default ListMenu
