import React, { useState } from "react";
import * as S from "./StyleHome.jsx";
import { useNavigate } from "react-router-dom";

import Back from './Image/Back.png';
import Go from './Image/Go.png';
import Nuvem from './Image/wordcloud.png';


//------------------- IMPORT DOS CARDS ---------------------

import Html from './Image/html.png';
import Css from './Image/css.png';
import Js from './Image/js.png';
import ReactLogo from './Image/react.png';
import StyledLogo from './Image/styled.png';
import Git from './Image/git.png';
import Rote from './Image/rota.png';
import Cloud from './Image/cloud.png';

export default function SkillAndTools() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=> navigate(-1);


  const images = [
    { src: Html, alt: "Imagem que remete ao HTML", acronym: "HTML", description: "Hypertext Markup Language" },
    { src: Css, alt: "Imagem que remete ao CSS", acronym: "CSS", description: "Cascating Style Sheet" },
    { src: Js, alt: "Imagem que remete ao JS", acronym: "JS", description: "JavaScript program language" },
    { src: ReactLogo, alt: "Logo do React", acronym: "REACT", description: "Biblioteca do Facebook" },
    { src: StyledLogo, alt: "Logo do Styled-components", acronym: "STYLED-COMPONENTS", description: "Folhas de estilo integradas ao React" },
    { src: Git, alt: "Imagem do simbolo de ramificação da worktree", acronym: "GIT AND GITHUB", description: "Ferramentas e versionamento" },
    { src: Rote, alt: "Imagem que remete a rotas", acronym: "REACT-ROUTER-DOM", description: "Sistema de rotas" },
    { src: Cloud, alt: "Imagem que remete a computação em nuvem", acronym: "CLOUD COMPUTING", description: "Maquinas, servidores ou serviços armazenados online" }
  ];

  const [cardX , setCardX] = useState(0);

  const ArrowBack =()=>{
    setCardX(cardX + 100)
  };

  const ArrowGo =()=>{
    setCardX(cardX -100)
  }

  return (
    <S.SkillAndTools>
      <button onClick={()=>handleClickMBACK()}>Voltar</button>
      <h2>Habilidades e Ferramentas</h2>
      <S.Nuvem src={Nuvem} alt="Mapa com formato de nuvem contendo as palavras, Liderança, Pró ativa, Organizada, Metodologia Ágil, Persistência, Marketing Pessoal, Disciplina, Estudiosa, Curiosa, Facilidade em aprender, Desenvolvimento pessoal, Praticas de Comunicação não violenta, Resolução de problemas, Mentoria de carreira, Palestrante voluntária, Trabalho em equipe, Inglês básico, Interpretação de texto, Solícita e Sincera" />

      <S.Tools>
        <img src={Back} alt="Anterior" onClick={ArrowBack} />
          <S.DivMap>
          {images.map( (item)=>(
            <S.DivCard key={item.Card} style={{ transform: `translateX(${cardX}%)` }}>
            <img src={item.src} alt={item.alt}/>
            <h2>{item.acronym}</h2>
            <h5>{item.description}</h5>
            </S.DivCard>
          ))}
          </S.DivMap>
        <img src={Go} alt="Próximo" onClick={ArrowGo}/>
      </S.Tools>
    </S.SkillAndTools>
  )
}