import { useState } from 'react';
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
import Back from './Image/Back.png';
import Go from './Image/Go.png'



function SkillsAndTools() {
  let navigate = useNavigate();

  const handleClickMBACK = () => navigate(-1);

  const images = [
    { src: Html, alt: "Imagem que remete ao Hypertext Markup Language", Title: "HTML - Hypertext Markup Language" },
    { src: Css, alt: "Imagem que remete ao Cascating Style Sheet", Title: "CSS - Cascating Style Sheet" },
    { src: Js, alt: "Imagem que remete ao JavaScript", Title: "JS - JavaScript program language" },
    { src: ReactLogo, alt: "Imagem da logo do React", Title: "React - Facebook Library" },
    { src: Rote, alt: "Imagem que remete ao React-Router-Dom", Title: "React-Router-DOM - Routes system" },
    { src: StyledLogo, alt: "Imagem da logo do Styled-Components", Title: "Styled-Components - Cascating Style Sheet on React" },
    { src: Git, alt: "Imagem que remete a ação de commit", Title: "Git, Github - Tools and versioning" },
    { src: Cloud, alt: "Imagem que remete a computação em nuvem", Title: "Cloud Computing - Machines, servers and services stored online" },
  ]

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
          <img src={currentImageIndex} />
          <img src={Go} alt="Foto posterior" onClick={prevImage}/>
        <div>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
              <h4>{image.Title}</h4>
            </div>
          ))}
        </div>
      </S.DivCarrousel>


    </S.SectionSkillAndTools>
  )
}

export default SkillsAndTools