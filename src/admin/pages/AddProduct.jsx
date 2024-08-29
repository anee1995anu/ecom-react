import React, { useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap';

const AddProduct = () => {

    const [validated, setValidated] = useState(false);

    const [productData, setProductData] =useState({
      productName:"",
      productCategory:"",
      productPrice:"",
      productStock:"",
      productPhoto:null


    });


    const handleChange = (e)=>{
      const {name, value}=e.target;
      setProductData({...productData,[name]:value});
    }

     
     console.log("product data.........>",productData);      
    
    
    
     const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
      
        event.stopPropagation();
        setValidated(true);
      }else{
  console.log("form submitted succesfully");
      setValidated(true);
      }
    };


  return (
    <Container style={{justifyContent:"center",display:"flex"}}  className="my-3">
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{width:"400px"}}>
      <Row className="mb-3">
        <Form.Group  controlId="validationCustom01" className='position-relative'>
          <Form.Label>Product name</Form.Label>
          <Form.Control
          onChange={handleChange}
            required
            type="text"
            name="productName"
            placeholder="Product name"
            
          />
          <Form.Control.Feedback type='invalid' tooltip>Please enter product name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            onChange={handleChange}
            required
            type="text"
            name="productCategory"
            placeholder="Category"
            
          />
          <Form.Control.Feedback  type='invalid'>Please enter Category</Form.Control.Feedback>
        </Form.Group>



        <Form.Group  controlId="validationCustom01">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleChange}
            required
            type="number"
             name="productPrice"
            placeholder="Price"
            
          />
          <Form.Control.Feedback type='invalid'>Please enter price</Form.Control.Feedback>
        </Form.Group>


        
        <Form.Group  controlId="validationCustom01">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            onChange={handleChange}
            required
            type="number"
            name="productStock"
            placeholder="Stock"
            
          />
          <Form.Control.Feedback type='invalid'>Please enter Stock</Form.Control.Feedback>
        </Form.Group>


        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Product photo</Form.Label>
          <Form.Control
            onChange={handleChange}
            required
            type="file"
            placeholder="productPhoto"
            
          />

        </Form.Group>



      </Row>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>
    
  )
}

export default AddProduct