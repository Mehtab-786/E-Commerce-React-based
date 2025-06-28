import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="w-full h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/backone.jpg')" }}>
        <div className="text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">Stylish Wear, Everyday</h1>
          <p className="text-lg md:text-xl text-white dark:text-gray-300">Shop the latest trends in fashion and accessories</p>
          <div className="flex justify-center gap-4">
            <Link to="/product" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">Explore Products</Link>
            <Link to="/about" className="border px-6 py-3 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Categories Tabs */}
      <section className="py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Browse by Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-4 py-2 bg-gray-100 dark:bg-neutral-800 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700">Men</button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-neutral-800 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700">Women</button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-neutral-800 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700">Accessories</button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-neutral-800 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700">Shoes</button>
        </div>
      </section>

            {/* 🛍️ Featured Collection */}
      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: "Summer Tee", price: 499, img: "/tee.jpg" },
            { title: "Casual Jacket", price: 1299, img: "/jacket.jpg" },
            { title: "Classic Sneakers", price: 899, img: "/sneakers.jpg" },
            { title: "Leather Bag", price: 1599, img: "/bag.jpg" },
          ].map((prod, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-all bg-white dark:bg-neutral-800"
            >
              <img
                src={prod.img}
                alt={prod.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center ">
                  <h3 className="font-semibold">{prod.title}</h3>
                  <p className="text-sm text-gray-500">Casual</p>
                </div>
                <p className="text-lg font-bold text-green-600">₹{prod.price}</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner / Mid-Sale Section */}
      <section className="bg-blue-100 dark:bg-neutral-800 text-center py-12 my-10">
        <h2 className="text-3xl font-bold">🔥 Mid-Year Sale - Up to 50% OFF</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Hurry up! Limited-time offer on bestsellers.</p>
        <Link to="/sale" className="inline-block mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Shop Now</Link>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-6 text-center bg-neutral-100 dark:bg-neutral-900 border-t border-gray-300 dark:border-neutral-700">
        <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">Get latest updates on new arrivals and discounts</p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 border rounded-md outline-none w-full md:w-1/3"
          />
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Subscribe
          </button>
        </form>
      </section>

      {/* 📝 Footer */}
      <footer className="bg-black text-white py-4 text-center text-sm">
        © 2025 YourBrand. Built with 💙 by Mehtab Hussain.
      </footer>
    </div>
  );
}

export default Home;
