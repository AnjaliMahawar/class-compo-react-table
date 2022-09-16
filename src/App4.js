import React, { useState } from 'react'

export default function App4() {


  //state
  const [userData, setUserData] = useState({
    name: "",
    surName: "",
    age: "",
    employeeData: []
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
    let surName = userData.surName;
    let age = userData.age;
    let newEmployee = {
      'name': name,
      'surName': surName,
      'age': age


    }
    employeeData.push(newEmployee)
    setUserData({
      ...userData,
      employeeData: employeeData
    })
  
 

  }
 

  console.log("empl",userData)

 /* const inputGroupChangeHandler = (event) => {
    setProjectGroupDetails((prevState) => ({
       ...prevState,
       [event.target.id]: event.target.value
    }));
}
*/


  return (
    
    <>
    
      <h1>Rfc Create</h1>

      <form autoComplete="off" onSubmit={handleSubmit} className='form-group'
      >
        <label>Name</label>
        <input type="text" name='name' onChange={changeData} value={userData.name} className='form-control' required></input>
        <br></br>
        <label>surName</label>
        <input type="text" name='surName' onChange={changeData} className='form-control' required></input>
        <br></br>
        <label>Age</label>
        <input type="text" name='age' onChange={changeData} className='form-control' required></input>
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
              <th> surName</th>
              <th>Age</th>
            </tr>
            { 
              userData.employeeData.map((data, indx) =>
                <tr key={indx}>
                  <td>{data.name}</td>
                  <td>{data.surName}</td>
                  <td>{data.age}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>


    </>
  )
}
