import React, { Component } from 'react';
import PersonContext from './PersonContext';

class Static extends Component {
  static contextType = PersonContext;

  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    );
  }
}

export default Static;