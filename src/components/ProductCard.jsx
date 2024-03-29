import {useNavigate} from "react-router-dom"

const ProductCard = ({item}) => {
  const {title, category, thumbnail, price} = item;
  const navigate = useNavigate()

  return (
    <div className="cursor-pointer bg-labelColor p-5 rounded-md" onClick={()=>navigate(`/dashboard/products/${title}?detail=${item.id}`,{state:item}) }>
      <div className="w-full rounded-md bg-white hover:opacity-75 lg:h-80">
        <img
          src={thumbnail}
          alt={title}
          title={title}
          className="h-[200px] object-contain w-full object-fit lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-main underline line-clamp-1">{title}</h3>
          <p className="mt-1 text-base text-main line-clamp-1">{category}</p>
        </div>
        <p className="text-xl font-medium text-main">{price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;