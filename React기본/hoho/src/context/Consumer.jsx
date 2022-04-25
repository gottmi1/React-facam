import React from 'react'
import PersonContext from './PersonContext'

export default function Example1() {
  return (
    <PersonContext.Consumer>
      {(persons) => (<ul>{persons.map(person => <li key={person.id}>{person.name}</li>)}</ul>)}
    </PersonContext.Consumer>
  )
}
