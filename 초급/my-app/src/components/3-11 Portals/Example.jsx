import React from 'react'
import {createPortal} from'react-dom'
import ThankYou from './ThankYou'



const Portal = (props) => {
  return createPortal(props.children, document.getElementById('portal'))
}

export default function Example() {
  return (
    <div onClick={() => console.log("div")}>
      <Portal>
        <ThankYou />
      </Portal>
      <div style={{position : "absolute"}}>
        <button>포항항</button>
      </div>
    </div>
  )
}
