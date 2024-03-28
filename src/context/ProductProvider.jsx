import { createContext } from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";


const ProductContext = createContext();
//? The reason we need context is that we do not want both the query written by the user and the results from the API to be lost when we come back after going to the detail page.
//! Also, if we did it on the products page, it would send a request to the API every time the page was rendered, even though there was no call.

//! create wrapper component; Stored data and functions are defined and shared here
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`https://dummyjson.com/products/search?q=${search}`);
      // console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData()
  }, [search]);

  return (
    <ProductContext.Provider value={{ products, loading, search, setSearch }}>
      { children }
    </ProductContext.Provider>
  )
}

export default ProductProvider;

// optional
export const useProducts = () => {
  return useContext(ProductContext)
};
//! custom hooks are needed bcs react hooks cannot be used in javascript functions
//? custom hooks must start with use
//* custom hooks does not return jsx