import React, { Component } from 'react'

export default class App5 extends Component {
    constructor(props){

        super(props)
           this.state={
                name:"",
                surName:"",
                age:"",
                books:[],
              
              
            }
        }
      
        handleAddBookSubmit=(e)=>{
            e.preventDefault();
            console.log('working')
            console.log(this.state.name)
            console.log(this.state.surName)
            console.log(this.state.age)
            
            this.setDataLs()
            this.setState({books:[...this.state.books,this.state.name,this.state.surName,this.state.age]})
            //this.setState({books:[...this.state.books]});
           //  this.setState({book:{this.state.name,}})}
            //this.setState({book:{this.state.name,this.state.surName}})
        }
       setDataLs(){
        console.log('ok')
        localStorage.setItem('mydata',JSON.stringify(this.state.books))
       }
  
  render() {
    return (
        <div className='wrapper'>
        <h2>React </h2>
      <h1>student Book</h1>
      
     
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off"  onSubmit={this.handleAddBookSubmit} className='form-group'
         >
            <label>Name</label>
            <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name} className='form-control' required></input>
            <br></br>
            <label>surName</label>
            <input type="text"  onChange={(e)=>{this.setState({surName:e.target.value})}} value={this.state.surName} className='form-control' required></input>
            <br></br>
            <label>Age</label>
            <input type="text"  onChange={(e)=>{this.setState({age:e.target.value})}} value={this.state.age} className='form-control' required></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md' >
              ADD
            </button>
          </form>
          {this.state.books.length>0&&<>
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
               
               {this.state.books.map(boo=>(
                   <tr key={boo.this.state.name}>
                   <td>{boo.this.state.name}</td>
                   <td>{boo.this.state.surName}</td>
                 <td>{boo.this.state.cls}</td>
                 
             </tr>   
             ))   
               }
                </tbody>
              </table>
            </div>
           
          </>}
          {this.state.books.length < 1 && <div>No any students are added yet</div>}
        </div>

      

      </div>
    </div>
    )
  }
}
