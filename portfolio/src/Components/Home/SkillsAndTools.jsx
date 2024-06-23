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
    { image:Html, altText: "Imagem que remete ao Hypertext Markup Language", title: "HTML - Hypertext Markup Language" },
    { image:Css, altText: "Imagem que remete ao Cascading Style Sheet", title: "CSS - Cascading Style Sheet" },
    { image:Js, altText: "Imagem que remete ao JavaScript", title: "JS - JavaScript program language" },
    { image:ReactLogo, altText: "Imagem da logo do React", title: "React - Facebook Library" },
    { image:Rote, altText: "Imagem que remete ao React-Router-Dom", title: "React-Router-DOM - Routes system" },
    { image:StyledLogo, altText: "Imagem da logo do Styled-Components", title: "Styled-Components - Cascating Style Sheet on React" },
    { image:Git, altText: "Imagem que remete a ação de commit", title: "Git, Github - Tools and versioning" },
    { image:Cloud, altText: "Imagem que remete a computação em nuvem", title: "Cloud Computing - Machines, servers and services stored online" },
  ]

  return (
    <S.SectionSkillAndTools>
        <S.Button onClick={() => handleClickMBACK()}>Back</S.Button>
        <S.DivSkills>
          <img src={Wordmap} alt="Mapa com formato de nuvem contendo as palavras, Liderança, Pró ativa, Organizada, Metodologia Ágil, Persistência, Marketing Pessoal, Disciplina, Estudiosa, Curiosa, Facilidade em aprender, Desenvolvimento pessoal, Praticas de Comunicação não violenta, Resolução de problemas, Mentoria de carreira, Palestrante voluntária, Trabalho em equipe, Inglês básico, Interpretação de texto, Solícita e Sincera " />
        </S.DivSkills>
        <S.DivCarrousel>
          <img src={Back} alt="seta de voltar ao anterior" onClick={(prevImage)=>{(prevImage + 1)}}/>
        <S.DivCard>
          {tools.map(card => (
            <Card key={card.title} image={card.image} title={card.title} description={card.altText}/>
            ))}
        </S.DivCard>
          <img src={Go} alt="seta de ir para o próximo" />
        </S.DivCarrousel>

        
      </S.SectionSkillAndTools>
  )
}

export default SkillsAndTools