import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const PrivateRouter = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <>
        <Navbar />
        <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  )
}

export default PrivateRouter