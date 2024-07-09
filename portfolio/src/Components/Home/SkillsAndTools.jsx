import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './StyleHome.jsx';
import Card from './Card.jsx';

//------------------ IMPORT IMAGES: SKILLS AND TOOLS ------------------
import Wordmap from './Image/wordcloud.png';
import Cloud from './Image/cloud-computing.png';
import Git from './Image/commit-git.png';
import Css from './Image/css.png';
import Html from './Image/html.png';
import Js from './Image/js.png';
import ReactLogo from './Image/react.png';
import Rote from './Image/rota.png';
import StyledLogo from './Image/styled.png';
import Back from './Image/Back.png';
import Go from './Image/Go.png'



function SkillsAndTools() {
  let navigate = useNavigate();

  const handleClickMBACK = () => navigate(-1);

  const tools = [
    { image: Html, altText: "Imagem que remete ao Hypertext Markup Language", acronym: "HTML", title: "Hypertext Markup Language" },
    { image: Css, altText: "Imagem que remete ao Cascading Style Sheet", acronym: "CSS", title: "Cascading Style Sheet" },
    { image: Js, altText: "Imagem que remete ao JavaScript", acronym: "JS", title: "JavaScript program language" },
    { image: ReactLogo, altText: "Imagem da logo do React", acronym: "REACT", title: "Facebook Library" },
    { image: Rote, altText: "Imagem que remete ao React-Router-Dom", acronym: "REACT-ROUTER-DOM", title: "Routes system" },
    { image: StyledLogo, altText: "Imagem da logo do Styled-Components", acronym: "STYLED-COMPONENTS", title: "Cascading Style Sheet on React" },
    { image: Git, altText: "Imagem que remete a ação de commit", acronym: "GIT AND GITHUB", title: "Tools and versioning" },
    { image: Cloud, altText: "Imagem que remete a computação em nuvem", acronym: "CLOUD COMPUTING", title: "Machines, servers and services stored online" },
  ];

  // const [move , setMove] = useState(0)

  let move = 0;

  const moveNext = ()=>{
    move -=100;
  }
  
  const movePrev = ()=>{
    move +=100;
  }
  

  return (
    <S.SectionSkillAndTools>
      <S.Button onClick={() => handleClickMBACK()}>Back</S.Button>
      <h2><spam>Skills</spam> and Tools</h2>
      <S.DivSkills>
        <img src={Wordmap} alt="Mapa com formato de nuvem contendo as palavras, Liderança, Pró ativa, Organizada, Metodologia Ágil, Persistência, Marketing Pessoal, Disciplina, Estudiosa, Curiosa, Facilidade em aprender, Desenvolvimento pessoal, Praticas de Comunicação não violenta, Resolução de problemas, Mentoria de carreira, Palestrante voluntária, Trabalho em equipe, Inglês básico, Interpretação de texto, Solícita e Sincera " />
      </S.DivSkills>
      <S.DivCarrousel>
        <img src={Back} alt="seta de voltar ao anterior" onClick={movePrev}/>
        <S.DivTV>
          <S.DivCard $test={move}>
            {tools.map(card => (
              <Card key={card.title} image={card.image} title={card.altText} acronym={card.acronym} description={card.title} />
            ))}
          </S.DivCard>
        </S.DivTV>
        <img src={Go} alt="seta de ir para o próximo" onClick={moveNext} />
      </S.DivCarrousel>


    </S.SectionSkillAndTools>
  )
}

export default SkillsAndTools