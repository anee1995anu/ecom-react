import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const ProductDetails =() => {
    const [product,setProduct]=useState(null);
    const {id} = useParams();
    const getProductDetails= useCallback(async()=>{
        const res=await axios.get('/products.json');
        const products=res.data.products;
        const currentProd=products.find((prod) => prod.id ===Number(id));
       
    
        setProduct(currentProd);
    },[id])

    useEffect(()=>{

      console.log("useeffect.....");

        getProductDetails();
    },[getProductDetails]);
    console.log("product.....>",product);
  return (
    <Container>
        <Row className='my-3'>
            <Col md={5}>
            <img src={product?.image ?? ""} alt="" style={{width:"100%"}}></img>
            </Col>
            <Col>
            <ListGroup>
      <ListGroup.Item>{product?.name ?? ""}</ListGroup.Item>
      <ListGroup.Item>{product?.brand ?? ""}</ListGroup.Item>
      <ListGroup.Item>{product?.stock ?? ""}</ListGroup.Item>
      <ListGroup.Item>{product?.category ?? ""}</ListGroup.Item>
      <ListGroup.Item>{product?.description?? ""}</ListGroup.Item>
    </ListGroup>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetails