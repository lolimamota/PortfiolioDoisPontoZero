import React from 'react'
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  list-style: none;
  text-decoration: none;
}
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    </>
  )
}

export default App