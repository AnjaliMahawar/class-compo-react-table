import React, { useState } from 'react';
import "./App1.css";
import Table from './Table';

export default function From() {


  //state
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mo: "",
    employeeData: [],


  })
  
  let changeData = (e) => {

    setUserData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,

    }));
    
  
  }

 

  //function
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log('ok')

    var employeeData = userData.employeeData;
    let name = userData.name;
    let email = userData.email;
    let mo = userData.mo;
    let newEmployee = {
      'name': name,
      'email': email,
      'mo': mo


    }
   
 
   
       
      employeeData.push(newEmployee)
      setUserData({
        ...userData,
        employeeData: employeeData,
      })
      setUserData({
        ...userData,
        name: "",
        email: "",
        mo: "",
      })


    }



  



  


  return (

    <>

      <h1>Rfc Create</h1>

      <form autoComplete="off" onSubmit={handleSubmit} className='form-group'
  >
        <label>Name</label>
        <input type="text" name='name' onChange={changeData} value={userData.name} className='form-control' required></input>
       
        <br></br>
        <label>Email</label>
        <input type="text" name='email' onChange={changeData} value={userData.email} className='form-control' required></input> 
        <br></br>
        <label>Mobile</label>
        <input type="text" name='mo' onChange={changeData} value={userData.mo} className='form-control' required></input> 
        <br></br>
        <button type="submit" className='btn btn-success btn-md' >
          ADD
        </button>
      </form>
      <Table></Table>


    </>
  )
          }