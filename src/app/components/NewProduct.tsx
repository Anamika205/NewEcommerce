import React from 'react'
import ProductCards from "./ProductCards";
import Product from "../../../public/Assets/ProductImg/product.png"
import Product1 from "../../../public/Assets/ProductImg/product1.png";
import Product2 from "../../../public/Assets/ProductImg/product2.png";
import Product3 from "../../../public/Assets/ProductImg/product3.png";
import Product4 from "../../../public/Assets/ProductImg/product4.png";
import Product5 from "../../../public/Assets/ProductImg/product5.png";
import Product6 from "../../../public/Assets/ProductImg/img6.png";
import Product7 from "../../../public/Assets/ProductImg/img7.png";
 
const productItem = [
  {
    img:Product,
    title:"Sports",
    desc:"Trecking & Running Shoes -Black",
    rating:2,
    price:"50.00"
},
{
  img:Product1,
  title:"Sports",
  desc:"Trecking & Running Shoes -Black",
  rating:3,
  price:"50.00"
},
{
  img:Product2,
  title:"Sports",
  desc:"Trecking & Running Shoes -Black",
  rating:3,
  price:"50.00"
},
{
  img:Product3,
  title:"Sports",
  desc:"Trecking & Running Shoes -Black",
  rating:5,
  price:"50.00"
},
{
  img:Product4,
  title:"Sports",
  desc:"Trecking & Running Shoes -Black",
  rating:4,
  price:"50.00"
},
{
  img:Product5,
  title:"Sports",
  desc:"Trecking & Running Shoes -Black",
  rating:5,
  price:"50.00"
},
{
  img:Product6,
  title:"Sports",
  desc:"Trecking & Running Shoes -Black",
  rating:5,
  price:"50.00"
},
{
  img:Product7,
  title:"Sports",
  desc:"Trecking & Running Shoes -Black",
  rating:5,
  price:"50.00"
},
]
function NewProduct() {
  return (
    <div><div className='container pt-16'>
      <h2 className='font-medium text-2xl pb-4 '>New Product</h2>
      <div className='grid grid-cols-1 place-items-center sm:place:items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x20 xl:gap-y-10'>{productItem.map((item, index)=>(<ProductCards
      key={index}
      img={item.img}
      title={item.title}
      desc={item.desc}
      rating={item.rating}
      price={item.price}
      />))}</div>
      </div>
      </div>
  )
}

export default NewProduct