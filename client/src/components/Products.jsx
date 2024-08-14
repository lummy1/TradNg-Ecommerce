import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product';
import  axios from "axios";
import { publicRequest } from '../helpers/requestMethods';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;

`

const Products = ({filters, cat, sort}) => {

  console.log(cat,filters, sort)
  const [products, setProducts] = useState([]);
  
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=> {

    const getProducts = async ()=>{

      try {
       // publicRequest.get("/products/"+id)
        const response = await  publicRequest.get( cat ? `/products?category=${cat}` : `/products` );
    
       // const response = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products` );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();

  }, [cat])
    
console.log(products)
  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      ) 
    )


  }, [products,cat, filters])
  

  useEffect(() => {
    if(sort==="newest"){

      setFilteredProducts(prev=> 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      )
    }else if(sort === "asc"){
      setFilteredProducts(prev=> 
        [...prev].sort((a,b) => a.price - b.price)
      )

    }else {

      setFilteredProducts(prev=> 
        [...prev].sort((a,b) => b.price - a.price)
      )
    }
  
   
  }, [sort])
  
  console.log(filteredProducts)
   
  return (
    <Container>
        { cat ? filteredProducts.map(item=>(
            <Product item={item} key={item._id} />
        )) : products.slice(0,8).map(item=>(
          <Product item={item} key={item._id} />
      ))
      
      }
        
        </Container>
  )
}

export default Products