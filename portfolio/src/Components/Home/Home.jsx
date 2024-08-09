import React from 'react'
import * as S from './StyleHome.jsx'
import PageExtra from './SkillsAndTools.jsx'
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const handleClickSkill = () => navigate('/SkillsAndTools')
  return (
    <S.Section>
      <S.DivH2s>
      <h2>Olá!</h2>
      <h2>Eu sou a <span className='verdinho'>Lorrayne</span></h2>
      <h2 className='h2menor'>Desenvolvedora Front End</h2>
      </S.DivH2s>
      <S.DivBtnAndP>
      <p>Atualmente estou no Brasil, e gosto mesmo de desenvolver<span className='verdinho'>Praticos</span> e <span className='verdinho'>Simples</span> sites responsivos.</p>
      <button onClick={()=>handleClickSkill()}>Comece por aqui</button>
      </S.DivBtnAndP>
    </S.Section>
  )
}

export default Home