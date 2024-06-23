import styled from "styled-components";
//------------------ IMPORT IMAGES: HOMEPAGE------------------
import Background from './Image/BackgroundHome.png'

//------------------ START: HOME PAGE STYLE ------------------

export const Section = styled.section`
width: 100%;
height: 100vh;
background-image: url(${Background});
background-size: cover;
color: #fff;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 1rem;
.verdinho{
    color:#16E232;
} 
`;

export const DivH2s = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
margin-right: 2rem;
font-size: 1.2rem;
.h2menor{
font-size: x-large;
}
`;

export const DivBtnAndP = styled.div`
width: 70%;
height: 45vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

p{
font-size: 1rem;
font-weight: 200;
text-align: center;
}

button{
    width: 50vw;
    height: 7.5vh;
    margin-top: 5rem;
    background: none;
    border: solid #16E232;
    color:#FFF;
}
`;

//------------------ FINISH: HOMEPAGE STYLE ------------------

//------------------ START: SKILLS AND TOOLS STYLE ------------------

export const DivSkills = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
width: 80%;
}
`;

export const DivCarrousel = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 40vh;
color: #fff;
img{
    width: 25px;
}
`;

export const SectionSkillAndTools = styled.section`
background-color: #00040b;
width: 100%;
height: 100vh;
display: flex;
gap: 2.5rem;
align-items: flex-start;
flex-direction: column;
padding-top: 2rem;
`;

export const Button = styled.button`
width: 30vw;
height: 5vh;
background: none;
border: solid #16E232;
color:#FFF;
text-align: center;
margin-left: .5rem;
`;

export const DivCard = styled.div`
display: flex;
justify-content:space-around;
align-items:center;
gap: 2rem;
overflow: hidden;
flex-direction: row;
`;