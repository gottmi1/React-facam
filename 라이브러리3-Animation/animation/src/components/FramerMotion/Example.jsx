import React from 'react'
import KeyFrame from './KeyFrame'
import Scale from './Scale'

export default function Example() {
  return (
    <>
      <div style={{position : "absolute", top : 300, left : 200}}>
        <Scale />
      </div>
      <div style={{position : "absolute", top : 600, left : 200}}>
      <KeyFrame />
      </div>
    </>
  )
}
