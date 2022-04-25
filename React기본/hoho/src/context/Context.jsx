import React, { useContext } from 'react'
import PersonContext from './PersonContext'

export default function Context() {
  const persons = useContext(PersonContext);
return (
  <ul>
    {persons.map(person => <li key={person.id}>{person.name}</li>)}
  </ul>
)
}