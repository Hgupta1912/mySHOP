import { useNavigate } from "react-router";

const ProductCard = ({ productInfo }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/shop/${productInfo.name}`)}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col"
    >
        <img
          src={`/${productInfo.pathName}`}
          alt={`${productInfo.name}`}
          className="h-full object-contain"
        />
      <div className="p-4 flex flex-col gap-1">
        <h3 className="font-semibold text-gray-900 text-base">{productInfo.name}</h3>
        <p className="text-green-700 font-bold text-lg">${productInfo.price}</p>
        <p className="text-gray-500 text-sm line-clamp-2">{productInfo.details}</p>
      </div>
    </div>
  );
};

export default ProductCard;