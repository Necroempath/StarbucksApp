import { useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";

const BasketPage = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("ordered products")) || []
  );

  const [total, setTotal] = useState(
    cart?.reduce((acc, item) => acc + item.price * item.amount, 0) || 0
  );

  const [showToast, setShowToast] = useState(false);

  const remove = (id) => {
    const updated = cart.filter((item) => item.id !== id);

    setCart(updated);
    localStorage.setItem("ordered products", JSON.stringify(updated));
  };

  function changeAmount(delta, index) {
    if (cart[index].amount + delta <= 0) return;

    cart[index].amount += delta;

    setTotal(
      cart?.reduce((acc, item) => acc + item.price * item.amount, 0) || 0
    );
  }

  function saveChanges() {
    localStorage.setItem("ordered products", JSON.stringify(cart));
    setShowToast(true);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-10 py-12">
      {showToast ? (
        <Toast message={"Changes saved!"} onClose={() => setShowToast(false)} />
      ) : null}
      <h1 className="text-4xl font-bold mb-10">Your Order</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 text-lg text-gray-600">
          Your basket is empty.
          <Link
            to="/menu"
            className="text-green-600 font-semibold ml-2 hover:underline cursor-pointer"
          >
            Go to menu →
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-6 border-gray-400"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                    <img
                      src={item.product.img}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.product.sizes[item.size].size}
                    </p>

                    <div className="flex items-center mt-3 gap-3">
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
                        onClick={() => changeAmount(-1, index)}
                      >
                        -
                      </button>

                      <span className="text-lg font-semibold">
                        {item.amount}
                      </span>

                      <button
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
                        onClick={() => changeAmount(1, index)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-lg font-semibold">
                    ${(item.price * item.amount).toFixed(2)}
                  </p>

                  <button
                    onClick={() => remove(item.id)}
                    className="mt-4 text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-100 rounded-xl flex justify-between items-center">
            <span className="text-2xl font-bold">Total:</span>
            <span className="text-3xl font-bold">${total.toFixed(2)}</span>
          </div>

          <button
            onClick={saveChanges}
            className="mt-8 w-full bg-green-600 text-white py-4 rounded-lg text-2xl font-semibold hover:bg-green-700 transition cursor-pointer"
          >
            Save Changes
          </button>
          <Link
            to="/menu"
            className="mt-8 block text-center bg-green-600 text-white py-4 rounded-lg text-2xl font-semibold hover:bg-green-700 transition cursor-pointer"
          >
            To Menu
          </Link>
        </>
      )}
    </div>
  );
};

export default BasketPage;
