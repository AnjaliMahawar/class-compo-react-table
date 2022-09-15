import React,{useState, useEffect} from 'react'


// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App3= () => {

  
  // input field states
  const [name, setName]=useState('');
  const [surName, setSurName]=useState('');
  const [cls, setCls]=useState('');
  const [books, setbooks]=useState(getDatafromLS());

  //submit
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // obj
    let book={
      name,
      surName,
      cls
    }
    setbooks([...books,book]);
    setName('');
    setSurName(''); //filled clr after submit data
    setCls('');
  }

  // delete book from LS
 /* const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
  }
  */

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
        <h2>React </h2>
      <h1>student Book</h1>
      
     
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>surName</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setSurName(e.target.value)} value={surName}></input>
            <br></br>
            <label>Age</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setCls(e.target.value)} value={cls}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>surName</th>
                    <th>class</th>
                 
                  </tr>
                </thead>
                <tbody>
               
               {books.map(boo=>(
                   <tr key={boo.name}>
                   <td>{boo.name}</td>
                   <td>{boo.surName}</td>
                 <td>{boo.cls}</td>
                 
             </tr>   
             ))   
               }
                </tbody>
              </table>
            </div>
           
          </>}
          {books.length < 1 && <div>No any students are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App3;