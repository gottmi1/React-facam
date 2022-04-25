import React, { useState } from 'react'

// export default function A(props) {
//   const [value,setValue] = useState("아직 안 바뀜")
//   return (
//     <div>
//       <B value={value} />
//       <button onClick={() => setValue("바꼇다")}>E값 바꾸기</button>
//     </div>
//   )
// }

// function B({value}) {
//   return (
//     <div>
//       <p>여긴 B</p>
//       <C value={value} />
//     </div>
//   )
// }
// function C({value}) {
//   return (
//     <div>
//       <p>여긴 C</p>
//       <D value={value} />
//     </div>
//   )
// }
// function D({value}) {
//   return (
//     <div>
//       <p>여긴 D</p>
//       <E value={value} />
//     </div>
//   )
// }
// function E({value}) {
//   return (
//     <div>
//       <p>여긴 E</p>
//       <h3>{value}</h3>
//     </div>
//   )
// }

export default function A(props) {
  const [value,setValue] = useState("아직 안 바뀜")
  return (
    <div>
      <h3>{value}</h3>
      <B setValue={setValue} />
    </div>
  )
}

function B(props) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={props.setValue} />
    </div>
  )
}
function C(props) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={props.setValue} />
    </div>
  )
}
function D(props) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={props.setValue} />
    </div>
  )
}
function E(props) {
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={() => props.setValue("바꼇다")}>A값 바꾸기</button>
    </div>
  )
}

