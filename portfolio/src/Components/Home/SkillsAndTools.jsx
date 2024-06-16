import React from 'react';
import { useNavigate } from 'react-router-dom';
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



function SkillsAndTools() {
  let navigate = useNavigate();

  const handleClickMBACK = () => navigate(-1);

  return (
    <S.SectionSkillAndTools>
        <S.Button onClick={() => handleClickMBACK()}>Voltar</S.Button>
        <S.DivSkills>
          <img src={Wordmap} alt="Mapa com formato de nuvem contendo as palavras, Liderança, Pró ativa, Organizada, Metodologia Ágil, Persistência, Marketing Pessoal, Disciplina, Estudiosa, Curiosa, Facilidade em aprender, Desenvolvimento pessoal, Praticas de Comunicação não violenta, Resolução de problemas, Mentoria de carreira, Palestrante voluntária, Trabalho em equipe, Inglês básico, Interpretação de texto, Solícita e Sincera " />
        </S.DivSkills>
        <S.DivCarrousel>
          <img src={Html} alt="Imagem que remete ao Hypertext Markup Language" />
          <img src={Css} alt="Imagem que remete ao Cascating Style Sheets" />
          <img src={Js} alt="Imagem que remete ao JavaScript" />
          <img src={ReactLogo} alt="Imagem da logo do React" />
          <img src={Rote} alt="Imagem que remete ao React-Router-Dom" />
          <img src={StyledLogo} alt="Imagem da logo do Styled-Components" />
          <img src={Git} alt="Imagem que remete a ação de commit" />
          <img src={Cloud} alt="imagem que remete a computação em nuvem" />
        </S.DivCarrousel>
      </S.SectionSkillAndTools>
  )
}

export default SkillsAndTools