import styled from "styled-components";

export const SectionProject = styled.section`
    color: white;
    height: 100vh;
    background-color: #00040b;
    text-align: center;
    h2{
        font-size: 1rem;
    }
    spam{
        color: #16E232;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5vh;
`;

export const DivGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    max-width: 80vw;
    gap: .5rem;
    img{
        width: 100%;
        height: 100%;
    }

    .GridImageAreaRed{
        grid-column: 1/3;
        grid-row: 1/4;
    }
    .GridImageAreaPink{
        grid-column: 3/5;
        grid-row: 1/2;
    }
    .GridImageAreaOrange{
        grid-column: -1/-4;
        grid-row: 5/6;
    }
    .GridImageAreaYellow{
        grid-column: 3/4;
        grid-row: 2/3;
    }
    .GridImageAreaBlue{
        grid-column: 1/5;
        grid-row: 4/5;
    }
    .GridImageAreaLilac{
        grid-column: 3/4;
        grid-row: 3/4;
    }
    .GridImageAreaCyan{
        grid-column: 1/2 ;
        grid-row: 5/6;
    }
    .GridImageAreaGreen{
        grid-column: 4/5 ;
        grid-row: 2/4 ;
    }
    .GridImageAreaPurple{
        grid-column: 1/5;
        grid-row: 6/7;
    }
    
`;