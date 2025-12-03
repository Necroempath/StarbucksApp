import { useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";

const Order = ({ product }) => {
  const [size, setSize] = useState(0);
  const [amount, setAmount] = useState(1);
  const [showToast, setShowToast] = useState(false);
  
  const handleAdd = () => {
    const orderedProduct = {
      id: crypto.randomUUID(),
      product: product,
      amount: amount,
      price: (product.sizes[size].price * amount).toFixed(2),
      size: size
    };

    setShowToast(true);

    const orders = JSON.parse(localStorage.getItem('ordered products')) || [];
    orders.push(orderedProduct);
    localStorage.setItem('ordered products', JSON.stringify(orders));
  };

  function changeAmount(delta) {
    if (amount + delta <= 0) return;

    setAmount((prev) => prev + delta);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      {showToast ? <Toast message="Added to your orders!" onClose={() => setShowToast(false)}/> : null}
      <div className="flex-shrink-0 w-full lg:w-1/3">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <img
            src={product.img}
            alt={product.name}
            className="w-100wv h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
        <p className="text-xl">{product.sizes[size].capacity}</p>
        <p className="text-xl">{product.sizes[size].calories}</p>

        <div>
          <h2 className="text-xl font-semibold mb-2">Size</h2>
          <div className="flex gap-3">
            {product.sizes.map((size, index) => (
              <div className="text-center">
                <button
                  key={size.size}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  onClick={() => setSize(index)}
                >
                  {size.size}
                </button>
                <p className="font-semibold mt-2">{size.capacity}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              className="px-3 py-2 hover:bg-gray-100"
              onClick={() => changeAmount(-1)}
            >
              -
            </button>
            <span className="px-4 py-2">{amount}</span>
            <button
              className="px-3 py-2 hover:bg-gray-100"
              onClick={() => changeAmount(1)}
            >
              +
            </button>
          </div>

          <button onClick={handleAdd} className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Add to Order
          </button>
        </div>

        <p className="text-xl font-semibold text-gray-900">
          Total: ${(product.sizes[size].price * amount).toFixed(2)}
        </p>
        <p className="text-md text-gray-700">
          Per unit: ${product.sizes[size].price}
        </p>
        <Link to="/menu" className="text-green-600 hover:underline mt-4 cursor-pointer">
          ← Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Order;
