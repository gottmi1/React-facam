import React, { useState } from 'react'

export default function Dialog(props) {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <>
      <button style={{
        position : 'absolute',
        left : 100,
      }} onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <div style={
        {position : "absolute",
        zIndex : 99,
        top : "50%",
        left : "50%",
        transform : "translate(-50%,-50%)",
        border : "1px solid black",
        padding : "50px",
        backgroundColor : "pink"
      }}>
        {typeof props.title === "string" ? <h1>{props.title}</h1> : props.title}
        {typeof props.description === "string" ? <h5>{props.description}</h5> : props.description}
        {typeof props.btn === "string" ? <button style={{
          backgroundColor : "red",
          color : "white"
        }} onClick={() => setIsOpen(false)}>{props.btn}</button> : <div onClick={() => setIsOpen(false)}>{props.btn}</div>}
      </div>
      }
      {isOpen && <div style={{
        position : "fixed",
        top : 0,
        left : 0,
        right : 0,
        bottom : 0,
        backgroundColor : "black"}} />}
    </>
  )
}
