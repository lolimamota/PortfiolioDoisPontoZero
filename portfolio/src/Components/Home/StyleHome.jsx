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
export const SkillAndTools = styled.section`
background-color: #00040b;
padding: 1rem;
width:100%;
height: 100vh;

button{
    width: 20vw;
    height: 5vh;
    background: none;
    border: solid #16E232;
    color:#FFF;
}
`;

export const Nuvem = styled.img`
    width: 300px;
`;

export const Tools = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: solid red;
img{
    width: 50px;
}
`;