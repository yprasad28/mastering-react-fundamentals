import React from 'react'
import "./JioHome.css"

function JioHome(props) {  //props calling from parent and accessing props to children
   const {name} = props 

   function getTyped(e){
    console.log( e.target.value)
   }

   function buttonClick(){
    alert("OTP sent to your Mobile Number!")
  
   }
  return (
    <div className='container'>
        <div className="card">
            <h1>Hi.... {name}</h1>
      <h1>Welcome to JioHome page</h1>
      </div>

      <div className="login-card">
        <form>
          <h2 className='login-head'>Login</h2>
          
          <input type="text" placeholder='Enter Jio number' onChange={getTyped} className='input'/>

          
        </form>
        <button className='btn btn-primary button' onClick={buttonClick}>Get OTP</button>
      </div>
    </div>
  )
}

export default JioHome
