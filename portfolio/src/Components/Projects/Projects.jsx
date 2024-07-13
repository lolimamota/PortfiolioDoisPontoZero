import React from 'react';
import * as S from './StyleProjects.jsx';

import CorTDC from './Image/tdc.png'
import CorCartoon from './Image/cartoon.png';
import CorCruzeiro from './Image/cruzeiro.png';
import CorDisney from './Image/disney.png';
import CorFantastika from './Image/fantastika.png';
import CorPortfolio from './Image/portfolio.png';
import CorVnW from './Image/vnw.png';
import CorWitcher from './Image/witcher.png';

function Projects() {
  return (
  <S.SectionProject>
    <h2>Discover the world on <spam>my Projects</spam></h2>
    <S.DivGallery>
      <img src={CorPortfolio} className='GridImageAreaRed' alt="imagem teste" />
      <img src={CorFantastika} className='GridImageAreaPink' alt="imagem teste" />
      <img src={CorCartoon} className='GridImageAreaOrange' alt="imagem teste" />
      <img src={CorCruzeiro} className='GridImageAreaYellow' alt="imagem teste" />
      <img src={CorVnW} className='GridImageAreaBlue' alt="imagem teste" />
      <img src={CorWitcher} className='GridImageAreaLilac' alt="imagem teste" />
      <img src={CorDisney} className='GridImageAreaCyan' alt="imagem teste" />
      <img src={CorTDC} className='GridImageAreaGreen' alt="imagem teste" />
    </S.DivGallery>
  </S.SectionProject>
  )
}

export default Projects