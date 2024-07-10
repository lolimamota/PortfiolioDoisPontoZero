import styled from "styled-components";

export const SectionProject = styled.section`
    color: white;
    width: 100%;
    height: 100vh;
    background-color: #00040b;
    text-align: center;
    padding-top: 2rem;
    h2{
        font-size: 1rem;
    }
    spam{
        color: #16E232;
    }
`;

export const DivGallery = styled.div`
    border: solid purple;
    width: 100%;
    height: 80vh;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-template-areas: 
    "teste1 teste1 teste2" 
    "teste1 teste1 teste3"
    "teste4 teste5 teste3"
    "teste6 teste5 teste7"
    "teste8 teste9 teste9";
    
    .teste1{
        grid-area: teste1;
    }
    .teste2{
        grid-area: teste2;
    }
    .teste3{
        grid-area: teste3;
    }
    .teste4{
        grid-area: teste4;
    }
    .teste5{
        grid-area: teste5;
    }
    .teste6{
        grid-area: teste6;
    }
    .teste7{
        grid-area: teste7;
    }
    .teste8{
        grid-area: teste8;
    }
    .teste9{
        grid-area: teste9;
    }
`;