import React from "react"

export const themes = {
  light : {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark : {
    foreground: "#ffffff",
    background: "#222222",
  }
}

export const ThemeContext = React.createContext(themes.dark);
// 괄호 안에 든 건 디폴트 값