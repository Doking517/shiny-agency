import React, { useContext } from 'react'
import createGlobalStyle from 'styled-components'
import { ThemeContext } from '../context'

const StyledGlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        
    }

    body{
        background-color: ${({ props }) =>
          props.isDarkMode ? '#2F2E41' : '#ffff'};
          margin: 0;
    }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
