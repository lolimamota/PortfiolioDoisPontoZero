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

function Card() {
    // const titles = [
    //     {title: "HTML - Hypertext Markup Language" },
    //     {title: "CSS - Cascating Style Sheet" },
    //     {title: "JS - JavaScript program language" },
    //     {title: "React - Facebook Library" },
    //     {title: "React-Router-DOM - Routes system" },
    //     {title: "Styled-Components - Cascating Style Sheet on React" },
    //     {title: "Git, Github - Tools and versioning" },
    //     {title: "Cloud Computing - Machines, servers and services stored online" },
    //   ]

  return (
    <Section>
        <img src={HtmlImage} alt="" />
        <h4><span className='spanCard'>HTML</span> - Hypertext Markup Language</h4>
    </Section>
  )
}

export default Card