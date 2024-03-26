import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`https://dummyjson.com/products/search?q=${search}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect( () => {
    getData()
  }, []);

  return (
    <div className="mx-auto max-w-2x1 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7x1 lg:px-8">
      <SearchInput />
      <h2 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">
        All Products
      </h2>
      <div>
        <ProductCard />
      </div>
    </div>
  )
}

export default Products