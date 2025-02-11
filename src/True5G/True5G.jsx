import React from 'react'
import "./True5G.css"
const True5G = (props) => {  //props calling from parent and accessing props to children
  const {email} = props
  return (
    <div className='container'>
        <div className="card1">
           
      <h1>Welcome to True5G {email}</h1>
      </div>
    </div>
  )
}

export default True5G
