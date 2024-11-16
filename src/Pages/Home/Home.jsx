import { useEffect, useState } from "react";
import { generateProducts } from "../../data/productsData";
import ProductCard from "../../Components/Shared/Home/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  // get data
  const productData = generateProducts(20);

  useEffect(() => {
    setProducts(productData);
  }, []);
//   console.log(productData);

  return (
    <section className="mt-10">
      <div className="my-5">

      </div>
      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {
            products.map(product=><ProductCard
            key={product._id}
            product={product}
            ></ProductCard>)
        }
      </div>
    </section>
  );
};

export default Home;
