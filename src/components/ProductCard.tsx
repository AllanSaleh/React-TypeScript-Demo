import type { Product } from "../types/types"

const ProductCard : React.FC<{product: Product}> = ({product} : {product: Product}) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.brand}</p>
      <p>${product.price}</p>
    </div>
  )
}

export default ProductCard;