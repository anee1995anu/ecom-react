import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { SingleProduct } from './SingleProduct'
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from '../pages/redux/productSlice'


const LatestProducts = () => {

  const dispatch =useDispatch();
  const products=useSelector((state)=>state.products.data);

 // const products=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];
 //const [products,setProducts]=useState([]);//defining state,data recvd stored in products
   
  useEffect(()=>{//used to fetch data while mounting hppens



    fetch("./products.json")
    .then((data) => data.json())
    .then((res) =>dispatch(getProducts(res.products)));//fetched data pssed to setproucts fn as arguement


    //return("")........while unmounting times if chnges we need it.

  },[]);
  console.log("products are-------->",products);



  return (
    <>
    <Row>
        <Col>
        <h2 className='my-5'>
            Latest Products
        </h2>
        </Col>
    </Row>
    <Row>
      {/*List &keys*/}
       {products && products.map((product,index)=>(//dont use curly braces here bcz it returns nothing so use paranthesis
         <SingleProduct key={index} product={product}/>//props happening here//key to show uniqness here ....each component whwn reaches dom should hv unique id
       ))}
    
    </Row>
  
    </>
  )
}

export default LatestProducts