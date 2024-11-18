import { useEffect, useState } from "react";
import { generateProducts } from "../../data/productsData";
import ProductCard from "../../Components/Shared/Home/ProductCard";
import { ClockLoader } from "react-spinners";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(category);
  // get data
  const productData = generateProducts(12);
 
  useEffect(() => {

    setLoading(true);

    let filteredProducts = productData;

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTimeout(() => {
      setProducts(filteredProducts);
      setLoading(false);
    }, 500); // 500 ms
  }, [category, search]);

  //   handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue);
    setSearch(searchValue);
  };
  //   reset form
  const handleReset = () => {
    setCategory("");
    setSearch("");
  };
  // loading
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <ClockLoader color="#1E99F5" />
      </div>
    );
  }
  return (
    <section className="mt-10">
      {/* filter and sorting */}
      <div className="my-10 px-4 md:w-2/3 mx-auto rounded-md">
        <div className="bg-base-100 border-2 shadow-2xl py-5 px-6 flex flex-wrap gap-4 items-center justify-center sm:justify-between">
          {/* Input Section */}
          <form
            onSubmit={handleSearch}
            className="flex flex-wrap items-center gap-2 bg-gray-100 rounded-lg shadow-md w-full sm:w-auto"
          >
            <input
              name="search"
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              placeholder="Search for a product"
            />
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
              Search
            </button>
          </form>

          {/* Dropdown Section */}
          <select 
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full md:w-1/3"
          >
            {products.map((product, idx) => (
              <option key={idx}>{product.category}</option>
            ))}
          </select>
          {/* reset form */}
          <div>
            <button
              onClick={handleReset}
              className="border-2 px-2 py-1 rounded-md bg-[#1E99F5] text-white"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      {/* error */}
      {products.length === 0 && (
        <div>
          <p className="text-center text-red-700 text-2xl">No Product Found</p>
        </div>
      )}
     
     <div className="my-10">
        <h1 className="text-center text-4xl font-bold underline">All Products</h1>
     </div>

      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Home;
