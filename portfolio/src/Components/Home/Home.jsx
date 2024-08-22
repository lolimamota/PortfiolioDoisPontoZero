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
      <p>Olá!</p>
      <p>Eu sou a <span className='verdinho'>Lorrayne</span></p>
      <p>Desenvolvedora Front End</p>
      </S.DivH2s>
      <S.DivBtnAndP>
      <p>Atualmente estou no Brasil, gosto mesmo de desenvolver<span className='verdinho'>Praticos</span> e <span className='verdinho'>Simples</span> sites responsivos como este.</p>
      <button onClick={()=>handleClickSkill()}>Comece por aqui</button>
      </S.DivBtnAndP>
    </S.Section>
  )
}

export default Home