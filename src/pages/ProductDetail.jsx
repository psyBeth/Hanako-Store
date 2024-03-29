import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

const ProductDetail = () => {

  const { title: params } = useParams();
  //captures the value in dynamic routes
  //e capture whatever name we gave when setting the route with useParams.

  const { state, search } = useLocation();
  //! access the data moved via navigate with the useLocation() hook
  //! capture the parameters in the URL with search.

  const navigate = useNavigate();
  console.log(search);
  console.log(state);
  // const getDetailData = async () => {
  //   const {data} = await axios(`https://dummyjson.com/products/${search.split("=")[1]}`)
  //! Since we know that the value in the search coming from the url is unique, we captured the id information in this way. If there is more than one parameter in the url, then we need to sort accordingly.
  //   console.log(data)
  // }
  // useEffect(()=>{
  //   getDetailData()
  // },[])

  if (!state) return <ErrorPage />;

  const { thumbnail, title, description, category, price, images } = state;

  return (
    <div className="container bg-main">
      <div className="mt-6 w-full bg-white rounded-xl">
        <article className="mx-auto w-full block lg:flex mt-4 h-full 2xl:h-[70vh]  shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <div class="grid grid-rows-4 gap-2 h-full w-full lg:w-7/12 p-4">
            <div className="w-full row-span-3 ">
              <img
                className="h-full w-full rounded-lg object-contain"
                src={thumbnail}
                alt=""
              />
            </div>
            <div className="grid grid-cols-3 gap-4 row-span-1">
              {images.slice(0, images.length - 2).map((item, i) => (
                <div key={i}>
                  <img
                    className="h-[15vh] w-full rounded-lg"
                    src={item}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-evenly p-4">
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-5xl font-[600] text-main underline pb-10">{title}</h3>
              <p className="text-main font-[500] text-xl mt-1">{description}</p>
            </div>
            <div className="flex  mt-2 pt-3 ml-4 mr-2 text-main text-l">
              <div className="">
                <span className="block ">
                  Category : {category}
                </span>
                <span className="block">Price : {price} $</span>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => navigate(-1)}
                className="border rounded-lg bg-labelColor text-white p-3"
              >
                Back 
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="border rounded-lg bg-main text-white p-3"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetail;