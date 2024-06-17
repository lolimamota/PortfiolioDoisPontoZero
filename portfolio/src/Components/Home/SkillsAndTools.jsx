import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import * as S from './StyleHome.jsx';

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
  
  const images = [
    <img Title="HTML - Hypertext Markup Language" src={Html} alt="Imagem que remete ao Hypertext Markup Language" />,
    <img Title="CSS - Cascating Style Sheet" src={Css} alt="Imagem que remete ao Cascating Style Sheet" />,
    <img Title="JS - JavaScript program language" src={Js} alt="Imagem que remete ao JavaScript" />,
    <img Title="React - Facebook Library" src={ReactLogo} alt="Imagem da logo do React" />,
    <img Title="React-Router-DOM - Routes system" src={Rote} alt="Imagem que remete ao React-Router-Dom" />,
    <img Title="Styled-Components - Cascating Style Sheet on React" src={StyledLogo} alt="Imagem da logo do Styled-Components" />,
    <img Title="Git, Github - Tools and versioning" src={Git} alt="Imagem que remete a ação de commit" />,
    <img Title="Cloud Computing - Machines, servers and services stored online" src={Cloud} alt="imagem que remete a computação em nuvem" />
  ]

  const [text, setText] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <S.SectionSkillAndTools>
        <S.Button onClick={() => handleClickMBACK()}>Back</S.Button>
        <S.DivSkills>
          <img src={Wordmap} alt="Mapa com formato de nuvem contendo as palavras, Liderança, Pró ativa, Organizada, Metodologia Ágil, Persistência, Marketing Pessoal, Disciplina, Estudiosa, Curiosa, Facilidade em aprender, Desenvolvimento pessoal, Praticas de Comunicação não violenta, Resolução de problemas, Mentoria de carreira, Palestrante voluntária, Trabalho em equipe, Inglês básico, Interpretação de texto, Solícita e Sincera " />
        </S.DivSkills>
        <S.DivCarrousel>
          <img src={Back} alt="Foto anterior" onClick={nextImage} />
          <img src={currentImageIndex} alt={Titulo} />
          <h4>{Title}</h4>
          <img src={Go} alt="Foto posterior" onClick={prevImage}/>
        </S.DivCarrousel>

        
      </S.SectionSkillAndTools>
  )
}

export default SkillsAndTools