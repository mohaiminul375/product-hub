import { useEffect, useState } from "react";
import { generateProducts } from "../../data/productsData";

const Home = () => {
  const [products, setProducts] = useState([]);
  // get data
  const productData = generateProducts(20);

  useEffect(() => {
    setProducts(productData);
  }, []);
  console.log(productData);

  return (
    <section>
      <div></div>
      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
      </div>
    </section>
  );
};

export default Home;
