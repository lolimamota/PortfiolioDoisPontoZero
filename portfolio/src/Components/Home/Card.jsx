import React from "react";
import styled from 'styled-components';


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

export default function Card({image, title, description}){
    return(
        <Section>
            <img src={image} alt={title} />
            <h3 className="spanCard">{title}</h3>
            <h6>{description}</h6>
        </Section>
    )
}