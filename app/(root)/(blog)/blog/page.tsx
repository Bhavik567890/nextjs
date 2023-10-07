import ProductCard from '@/components/product-card/product-card'
import { getProducts } from '@/lib/fetch-product'
import React from 'react'

const Blogs = async() => {
  const product = await getProducts()
    type ProductType = {
    id: number;
    title: string;
    price:number;
    description:string;
    category:string;
    image:string;
    key:number;

  };
  return (
   <>
   <div className='grid grid-cols-3'>
    {product?.map((o:ProductType,i:number) =>(
      <ProductCard key={o.id}  id={o.id} title={o.title} price={o.price} description={o.description} category={o.category} image={o.image}  />
    ))}
   </div>


   </>
  )
}

export default Blogs

