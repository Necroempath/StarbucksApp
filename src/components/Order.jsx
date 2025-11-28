import React from 'react'
 import { Link } from "react-router-dom";

const Order = ({product}) => {

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      
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
        <p className="text-gray-600">{"Delicious Starbucks drink to enjoy."}</p>

        <div>
          <h2 className="text-xl font-semibold mb-2">Size</h2>
          <div className="flex gap-3">
            {["Tall", "Grande", "Venti"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button className="px-3 py-2 hover:bg-gray-100">-</button>
            <span className="px-4 py-2">{product.quantity || 1}</span>
            <button className="px-3 py-2 hover:bg-gray-100">+</button>
          </div>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Add to Order
          </button>
        </div>

        <p className="text-xl font-semibold text-gray-900">
          ${product.price?.toFixed(2) || "0.00"}
        </p>

        <Link to="/menu" className="text-green-600 hover:underline mt-4">
          ← Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Order