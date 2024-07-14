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
import CorZeroUm from './Image/zeroum.png';

function Projects() {
  return (
  <S.SectionProject>
    <h2>Discover the world on <spam>my Projects</spam></h2>
    <S.DivGallery>
      <a href="https://portfolio-lorrayne.vercel.app/" target='_blank'>
      <img src={CorPortfolio} className='GridImageAreaRed' alt="imagem teste" />
      </a>
      <a href="https://fantastikapetshop.vercel.app/"><img src={CorFantastika} className='GridImageAreaPink' alt="imagem teste" />
      </a>
      <a href="https://cn-exercise.vercel.app/"><img src={CorCartoon} className='GridImageAreaOrange' alt="imagem teste" />
      </a>
      <a href="https://christimas-emotions.vercel.app/"><img src={CorCruzeiro} className='GridImageAreaYellow' alt="imagem teste" />
      </a>
      <a href="https://patriocinio-vnw.vercel.app/"><img src={CorVnW} className='GridImageAreaBlue' alt="imagem teste" />
      </a>
      <a href="https://the-red-project.vercel.app/"><img src={CorWitcher} className='GridImageAreaLilac' alt="imagem teste" />
      </a>
      <a href="https://lolimamota.github.io/AulaDisney/"><img src={CorDisney} className='GridImageAreaCyan' alt="imagem teste" />
      </a>
      <a href="https://lolimamota.github.io/toDeCacho/"><img src={CorTDC} className='GridImageAreaGreen' alt="imagem teste" />
      </a>
      <a href="https://zeroumchalengereview.vercel.app/" target='_blank' className='GridImageAreaPurple'><img src={CorZeroUm}  alt="imagem teste" />
      </a>
    </S.DivGallery>
  </S.SectionProject>
  )
}

export default Projects