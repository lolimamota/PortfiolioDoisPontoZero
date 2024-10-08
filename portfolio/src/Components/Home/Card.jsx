import React from "react";
import styled from 'styled-components';


//--------------------ESTILIZAÇÃO------------------

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* height: 35vh; */
    /* gap: 1rem; */
    /* img{
        width: 100px;
    }; */
    h3, h6{
        text-align: center;
        font-weight: 200;
    };
    h3{
        font-size: 2rem;

    }
    h6{
        font-size: 1rem
    }
    .spanCard{
        color: #16e232;
    };
    /* div{
        width: 80vw;
    }; */
`;

export default function Card({image, title, acronym, description}){
    return(
        <Section>
            <img src={image} alt={title} />
            <h3 className="spanCard">{acronym}</h3>
            <h6>{description}</h6>
        </Section>
    )
}