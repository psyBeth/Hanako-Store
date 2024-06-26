import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Loading from "../components/Loading";
import { useProducts } from "../context/ProductProvider";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState("");

  // const getData = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios(`https://dummyjson.com/products/search?q=${search}`);
  //     // console.log(data);
  //     setProducts(data.products);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect( () => {
  //   getData()
  // }, [search]);  //! getData() whenever the search state changes

  const { products, loading } = useProducts();

  return (
    <div className="bg-main">
      <div className="container bg-main">
        {/* <SearchInput search={search} setSearch={setSearch} /> */}
        <SearchInput />

        <h2 className="text-4xl font-bold mt-8 tracking-tight text-labelColor underline">
          All Products
        </h2>
        {loading ? (
          <Loading />
        ) : products.length ? (
          // <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          <div className="card-div">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-3xl text-red-600 mt-32">
            No Products
          </h2>
        )}
      </div>
    </div>
  )
}

export default Products