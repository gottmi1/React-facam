// import React, { Component } from 'react';
// import { ThemeContext } from './ThemeContext';

// class ThemedButtons extends Component {
// render() {
// let props = this.props;
// let theme = this.context;
// return (
// <button {...props} onClick={props.changeTheme}style={{backgroundColor : theme.background, color : theme.foreground}}>Button</button>
// );
// }
// }

// ThemedButtons.contextType = ThemeContext;

// export default ThemedButtons;

import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemedButtons(props) {
const theme = useContext(ThemeContext);
return (
<button {...props} onClick={props.changeTheme}
  style={{backgroundColor : theme.background, color : theme.foreground}}>Button</button>
)
}