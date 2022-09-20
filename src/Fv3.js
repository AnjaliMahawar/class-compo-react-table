import React, { useState } from 'react';
import "./App1.css";

export default function Fv3() {


  //state
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mo: "",
    employeeData: [],


  })
  let isValid= true
  const [error, setError] = useState({
    usernameL: "",
    emailL: "",
    MobileL: ''
  })
  let changeData = (e) => {

    setUserData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,

    }), fromValidation(e));
    
  
  }

  let fromValidation = (e) => {
    

    let errors = {}
    var paswd = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if(e.target.name=="name"){
    if (userData.name.trim().length < 5 ) {
      errors.usernameL = "user name should be valid"

    
      isValid = false
    }
   }

   if(e.target.name=="email"){
   
    if (!regex.test(userData.email)) {
        errors.emailL = "email should be valid"

      isValid = false
    }
}
if(e.target.name=="mo"){
    if (userData.mo.length < 10) {
      errors.MobileL = "Mobile No must be contain valid"


      isValid = false
    }
}
    setError(errors)

   
    return isValid
    console.log('valid first',isValid)

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
   
 
    
    console.log('====', error)
    console.log(typeof(error))
    if (isValid ) {
       
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




  }


  

  console.log(userData)
  return (

    <>

      <h1>Rfc Create</h1>

      <form autoComplete="off" onSubmit={handleSubmit} className='form-group'
  >
        <label>Name</label>
        <input type="text" name='name' onChange={changeData} value={userData.name} className='form-control' required></input><p>
          {error.usernameL}
        </p>
        <br></br>
        <label>Email</label>
        <input type="text" name='email' onChange={changeData} value={userData.email} className='form-control' required></input> <p> {error.emailL} </p>
        <br></br>
        <label>Mobile</label>
        <input type="text" name='mo' onChange={changeData} value={userData.mo} className='form-control' required></input> <p> {error.MobileL} </p>
        <br></br>
        <button type="submit" className='btn btn-success btn-md' >
          ADD
        </button>
      </form>
      <div className='table-responsive'>
        <table className='table'>
          <tbody>

            <tr>
              <th>Name</th>
              <th> email</th>
              <th>Mobile</th>
            </tr>
            {
              userData.employeeData.map((data, indx) =>
                <tr key={indx}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.mo}</td>
                </tr>
              )

            }
          </tbody>
        </table>
      </div>


    </>
  )
}