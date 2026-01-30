import type { Product } from "../types/types"

const ProductCard : React.FC<{product: Product}> = ({product} : {product: Product}) => {
  return (
    <div className="shadow-lg flex flex-col items-center rounded-lg hover:shadow-xl/20 transition duration-700 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className="w-32 h-32 object-cover rounded mb-2"/>
      <p className="text-gray-600 text-sm mb-2 text-center line-clamp-2">{product.description}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-2">
        <p className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{product.category}</p>
        {product.brand && <p className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">{product.brand}</p>}
        <p className="font-bold text-lg text-indigo-600">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard;