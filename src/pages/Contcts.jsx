import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Contacts.css";

const Contcts = ()=> {


  const [contactFormData ,setContactFormData] =useState({
    fullname:"",
    email:"",
    phone:"",
    message:""
  });

  const[errors,setErrors]=useState({

fullname:"",
    email:"",
    phone:"",
    message:""

  });


  const validateForm=()=>{
    let valid=true;

    const newErrors={
      fullname:"",
    email:"",
    phone:"",
    message:""

    }

     if(!contactFormData.fullname.trim()){
      newErrors.fullname="Fullname is required";
      valid=false;
     }else if(contactFormData.fullname.length<3){
      newErrors.fullname="Fulname should contain minimum three characters";
      valid=false;
     }


     if(!contactFormData.email.trim()){
      newErrors.email="email is required";
      valid=false;}
      else if(!/\S+@\S+\.\S+/.test(contactFormData.email)){
        newErrors.email="Invalid email Format";
        valid=false;
      }


      if(!contactFormData.phone.trim()){
        newErrors.phone="phone is required";
        valid=false;}
        else if(!/^\d{10}/.test(contactFormData.phone)){
          newErrors.phone="Invalid phone Format";
          valid=false;
        }



     setErrors(newErrors);
     return valid;
      
     

  }

 
const handleSubmit=(e)=>{

  e.preventDefault();

  if (validateForm()){
    console.log("contct form data........>",contactFormData);

}}
const onChangeHandler=(e)=>{

  const {name,value}=e.target;
  setContactFormData({...contactFormData,[name]:value});

}





console.log("contct form data........>",contactFormData);
  return (
    <Container>
      <h2>Contact Form</h2>
      <div>
        <form className='contact-form my-4'onSubmit={handleSubmit}>
      <input type='text' name='fullname' onChange={onChangeHandler}placeholder='please enter yur fullname'/>
      <span className='error'>{errors?.fullname}</span>
      <input type='email' name='email'onChange={onChangeHandler} placeholder='please enter yur email'/>
      <span className='error'>{errors?.email}</span>
      <input type='number' name='phone' onChange={onChangeHandler} placeholder='plese enter yur phone number'/>
      <span className='error'>{errors?.phone}</span>
      <textarea name='message' cols='25' rows='5' onChange={onChangeHandler} placeholder='please enter yur msg'></textarea>
      <button>Submit</button>

      </form>
      </div>
    </Container>
  )
}

export default Contcts