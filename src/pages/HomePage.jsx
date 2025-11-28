import { Link } from "react-router-dom";

const HomePage = () => {
  const imgs = [
    "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-103412.jpg",
    "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-103107.jpg",
    "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-103989.jpg",
  ];
  return (
    <div className="flex flex-col gap-16">
      <section className="relative w-full h-[80vh]">
        <img
          src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-103220.jpg"
          alt="Starbucks Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 bg-black opacity-50 flex flex-col justify-center items-start px-8 lg:px-20 h-full">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Welcome to Starbucks
          </h1>
          <p className="text-lg lg:text-2xl text-white mb-6 max-w-xl">
            Discover our world of coffee, drinks, and more. Taste the
            difference.
          </p>
          <Link
            to="/menu"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Explore Menu
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-semibold mb-8">Featured Drinks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imgs.map((img, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={img}
                alt={`Coffee ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-2">
                  Delicious Coffee {idx + 1}
                </h3>
                <p className="text-gray-600 text-sm">
                  Smooth, flavorful, and perfectly brewed for your enjoyment.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="relative w-full h-[60vh] bg-gray-100">
        <div className="absolute inset-0 bg-green-600 bg-opacity-90 flex flex-col justify-center items-center text-center px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Starbucks Rewards
          </h2>
          <p className="text-lg text-white mb-6 max-w-2xl">
            Earn stars, get free drinks, and enjoy exclusive offers when you
            join.
          </p>
          <Link
            to="/signup"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
