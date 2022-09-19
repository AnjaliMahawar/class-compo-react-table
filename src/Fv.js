import React, { useState } from 'react';
import "./App1.css";

export default function Fv() {


  //state
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mo: "",
    employeeData: [],


  })
  var isValid = true
  const [error, setError] = useState({
    usernameL: "",
    emailL: "",
    MobileL: ''
  })
  let changeData = (e) => {

    setUserData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,

    }));
  }

  let fromValidation = () => {
    

    let errors = {}
    var paswd = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (userData.name.trim().length < 5) {
      errors.usernameL = "user name should be valid"

    
      isValid = false
    }


    if (userData.email.length < 10) {
      errors.emailL = "email should be valid"

      isValid = false

    }
    if (!regex.test(userData.email)) {

      isValid = false
    }
    if (userData.mo.length < 10) {
      errors.MobileL = "Mobile No must be contain valid"


      isValid = false
    }
    setError(errors)

   
    return isValid

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
    const isValid = fromValidation();
    console.log('valid1', isValid)


    
    console.log('====', error)
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