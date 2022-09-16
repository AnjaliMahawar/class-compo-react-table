import React, { Component } from 'react'
import "./App1.css";

export default class Cv extends Component {
    constructor(props){

        super(props)
           this.state={
                username:"",
                password:"",
                email:"",
                Mobile:"",
                employeeData:[],
                error:{},
                err:{},
                isValid:true
            }
        }
  
 onChange=(e)=>{
 
     this.setState({[e.target.name]:e.target.value})
     /*if(username.length === ''){
        console.log(value,value.length)         //ERROR MSG ONCHANGE
        if(value.length < 2){
            setFormErrors({
                username:"Lenght must be 6 character long",
                
            })
        }else{
            setFormErrors({
                username:""
            })
        }
        
        */    console.log(e.target.name)
        if((e.target.name)==='username'){
            if(e.target.value.length<5){
                this.state.err.user="must be 5 charecter long"
              }
              else{
                this.state.err.user=""
              }
        }
       //if(this.name==='username')
      
     
      
 }
 fromValidation=()=>{
    const {username,password ,email,Mobile}=this.state;
   
    const error={}
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(username.trim().length<6){
        error.usernameL="username should be 6 charecter long"
       
        this.setState({
            isValid:false
        })
    }
    if(password.trim().length<4){
        error.passwordL="password should be 6 charecter long"
        this.setState({
            isValid:false
        })
    } 
    console.log(password)
    if(!paswd.test(password)){
        error.passwordL="password should be contains numbers, letters, and special charecter"
        this.setState({
            isValid:false
        })
    }
    if(email.length<10){
        error.emailL="email must be valid"
        this.setState({
            isValid:false
        })
    }
   if(!regex.test(email)){
    error.emailL="email must be valid.."

   }
   if(Mobile.length!==10){
    error.MobileL="Mobile no must be contain 10 digit"
   }
    this.setState({error})
    return this.state.isValid
 }
 onSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.state.email)
    let employeeData=this.state.employeeData;
    let username=this.state.username;
    let password=this.state.password;
    let email=this.state.email;
    let Mobile=this.state.Mobile;
    let newEmployee={
     // 'name':name,
      //'surName':surName,
      //'age':age

      'userName':username,
      'password':password,
      'email':email,
      'Mobile':Mobile
       
     

  }
  employeeData.push(newEmployee)
  this.setState({
    employeeData:employeeData
})
    const isValid=this.fromValidation();
    if(isValid){
        this.setState({username:'',password:"",email:"",Mobile:"",})
    }
  
 }

  render() {
    let employeeData=this.state.employeeData;
    const{username,password,error,email,usernameL2,Mobile,err}=this.state
    return (

    <>  
   <h1>From validation with RCC</h1>
     <form onSubmit={this.onSubmit}>
        <label>Name :</label>
        <input type="text"
        name='username'
        value={username}
        onChange={this.onChange}/>
        
        <br/>
        <p>{err.user}</p>
       <p> {error.usernameL} </p>
        
       

       <label>Email:</label>
        <input type="email"
        name='email'
        value={email}
        onChange={this.onChange}/>
        <br/>
       <p> {error.emailL} </p>


       <label>Mobile No.:</label>
        <input type="number"
        name='Mobile'
        value={Mobile}
        onChange={this.onChange}/>
        <br/>
       <p> {error.MobileL} </p>
        <button type='submit'>Login</button>
      
     </form>
     <div className='table-responsive'>
     { this.state.isValid &&
         <table className='table'>
         <tbody>
         
          <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Mobile</th>
          </tr>
          {
             employeeData.map((data,indx)=>
                 <tr key={indx}>
                     <td>{data.userName}</td>
                     <td>{data.email}</td>
                     <td>{data.Mobile}</td>
                      </tr>
                    
             )
               
          }
          </tbody>
       </table>
     }
      </div>
     </>   
    )
  }
}
