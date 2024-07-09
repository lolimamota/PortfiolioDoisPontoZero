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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(6 , 1fr);
    grid-template-areas: 
    " teste1 teste1 teste2 " 
    " teste1 teste 1 teste3 "
    " teste4 teste5 teste3 "
    " teste6 teste5 teste7 ";
`;