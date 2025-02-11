import React from 'react'
import "./Mobile.css"
const Mobile = (props) => {  //props calling from parent and accessing props to children
  const {phone} = props
  return (
    <div>
      <div className='container'>
        <div className="card2">
           
      <h1>Welcome to Mobiles {phone}</h1>
      </div>
    </div>
    </div>
  )
}

export default Mobile
