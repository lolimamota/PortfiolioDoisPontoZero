import React from 'react'
import styled from 'styled-components'
 
//--------------------IMPORTS-----------------
import HtmlImage from './Image/html.png';

//------------------------------ ESTILIZAÇÃO --------------------------------

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 35vh;
    gap: 1rem;
    img{
        width: 150px;
    };
    h4{
        text-align: center;
    }
    .spanCard{
        color: #16e232;
    }
`;

function Card({src, tittle, explanation}) {
     const titles = [
        {src: './Image/html.png', title: "HTML" , explanation:"Hypertext Markup Language" },
        {src: './Image/css.png', title: "CSS" , explanation:"Cascading Style Sheet" },
        {src: './Image/js.png', title: "JS" , explanation:"JavaScript program language" },
        {src: './Image/react.png' , title: "React" , explanation:"Facebook Library" },
        {src: './Image/rota.png', title: "React-Router-DOM" , explanation:"Routes system" },
        {src: './Image/styled.png', title: "Styled-Components" , explanation:"Cascating Style Sheet on React" },
        {src: './Image/commit-git.png', title: "Git, Github" , explanation:"Tools and versioning" },
        {src: './Image/cloud-computing.png', title: "Cloud Computing" , explanation:"Machines, servers and services stored online" },
      ]

  return (
    <Section>
        <img src={src} alt={title}/>
        <h4><span className='spanCard'>{title}</span> {explanation}</h4>
    </Section>
  )
}

export default Card