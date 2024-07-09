import React from 'react';
import * as S from './StyleProjects.jsx';

import teste from '../Home/Image/css.png'

function Projects() {
  return (
  <S.SectionProject>
    <h2>Discover the world on <spam>my Projects</spam></h2>
    <S.DivGallery>
      <img src={teste} className='teste1' alt="imagem teste" />
      <img src={teste} className='teste2' alt="imagem teste" />
      <img src={teste} className='teste3' alt="imagem teste" />
      <img src={teste} className='teste4' alt="imagem teste" />
      <img src={teste} className='teste5' alt="imagem teste" />
      <img src={teste} className='teste6' alt="imagem teste" />
      <img src={teste} className='teste8' alt="imagem teste" />
      <img src={teste} className='teste9' alt="imagem teste" />
      <img src={teste} className='teste10' alt="imagem teste" />
    </S.DivGallery>
  </S.SectionProject>
  )
}

export default Projects