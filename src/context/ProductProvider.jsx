import { createContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  return (
    <div>ProductProvider</div>
  )
}

export default ProductProvider