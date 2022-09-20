import React, { useState } from 'react'

export default function Table() {
    //state/hook
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mo: "",
        employeeData: [],
    
    
      })
  return (
    <>
    
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
