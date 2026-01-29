import { useEffect, useState } from "react"
import type { Product } from "../types/types"
import ProductCard from "../components/ProductCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=>{
    const fetchProducts = async () => {
      try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error){
        console.error({error})
      }
    }

    fetchProducts();
  },[])

  return (
    <div>
      {
        products.map((product : Product) => {
          return <ProductCard product={product} />
        })
      }
    </div>
  )
}

export default Products