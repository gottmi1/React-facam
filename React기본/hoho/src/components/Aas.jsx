import React, { useState } from 'react'

export default function Aas() {
  const [ num , setNum ] = useState(0);

  const clickHandler = (prev) => {
    setNum(num + 1)
  }

  return (
    <div onClick={clickHandler}>{num}</div>
  )
}
