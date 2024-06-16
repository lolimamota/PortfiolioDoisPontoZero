import React from 'react'
import {createGlobalStyle} from 'styled-components';
import Routes from './Components/Routes/Routes.jsx';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Heebo", sans-serif;
  list-style: none;
  text-decoration: none;
}
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <Routes/>
    </>
  )
}

export default App