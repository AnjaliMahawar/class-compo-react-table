import React, { Component } from 'react'

export default class App1 extends Component {
    constructor(props){

        super(props)
           this.state={
                name:"",
                surName:"",
                age:"",
                employeeData:[]
                
            }
           
        }
        changeData = (e) =>{
          this.setState({ [e.target.name]: e.target.value,
                        
           });
                 }
    
        handleAddBookSubmit=(e)=>{
            e.preventDefault();
            console.log('working')
            console.log(this.state.name)
            console.log(this.state.surName)
            console.log(this.state.age)
        let employeeData=this.state.employeeData;
        let name=this.state.name;
        let surName=this.state.surName;
        let age=this.state.age;
        let newEmployee={
          'name':name,
          'surName':surName,
          'age':age
           

      }
      employeeData.push(newEmployee)
      this.setState({
        employeeData:employeeData
    })
    this.setState({
      name:"",
      surName:"",
      age:"",
  })
          
            //this.setState({books:[...this.state.books]});
           //  this.setState({book:{this.state.name,}})}
            //this.setState({book:{this.state.name,this.state.surName}})
        }
     
  render() {
     
    let employeeData=this.state.employeeData;
    return (
        <div className='wrapper'>
        <h2>React Final Class compo create Operation</h2>
      <h1>student Book</h1>
      
     
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off"  onSubmit={this.handleAddBookSubmit} className='form-group'
         >
            <label>Name</label>
            <input type="text" name='name' onChange={ this.changeData} value={this.state.name} className='form-control' required></input>
            <br></br>
            <label>surName</label>
            <input type="text" name='surName' onChange={ this.changeData} value={this.state.surName} className='form-control' required></input>
            <br></br>
            <label>Age</label>
            <input type="text" name='age' onChange={ this.changeData} value={this.state.age} className='form-control' required></input>
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
            employeeData.map((data,indx)=>
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
          
        </div>

      

      </div>
    </div>
    )
  }
}
