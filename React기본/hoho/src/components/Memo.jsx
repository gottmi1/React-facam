import React, { useCallback, useMemo, useState } from 'react'

function sum(persons) {
  console.log('sum...')
  return persons.map(person => person.age).reduce((l,r) => l + r, 0);
}

export default function Memo() {
  const [value,setValue] = useState('');
  const [persons] = useState([
    {name : "진원" , age : 27},
    {name : "진영" , age : 22},
  ])
  const count = useMemo(() => {
    return sum(persons)
  },[persons]) 

  const click = useCallback(()=>{
    console.log(value)
  })

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>클릭</button>
    </div>
  )
  function change(e) {
    setValue(e.target.value)
  }
}
