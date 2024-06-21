import React from "react";
import styled from 'styled-components';
import LogoTeste from './Image/styled.png';


//--------------------ESTILIZAÇÃO------------------

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 35vh;
    gap: 1rem;
    img{
        width: 100px;
    };
    h4{
        text-align: center;
    }
    .spanCard{
        color: #16e232;
    }
`;

export default function Card(){
    return(
        <Section>
            <img src={LogoTeste} alt="" />
            <h3 className="spanCard">Titulo principal</h3>
            <h6>Explicação do titulo</h6>
        </Section>
    )
}