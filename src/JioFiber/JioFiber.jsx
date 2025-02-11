import React from 'react'
import "./JioFiber.css"
const JioFiber = (props) => { //props calling from parent and accessing props to children
  const {phone} = props
  return (
    <div>
      <div className='container'>
        <div className="card3">
            
      <h1>Welcome to JioFiber {phone}</h1>
      </div>
    </div>
    </div>
  )
}

export default JioFiber
