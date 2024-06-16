import React from 'react'
import * as S from './StyleHome.jsx'
import PageExtra from './SkillsAndTools.jsx'

function Home() {
  return (
    <S.Section>
      <S.DivH2s>
      <h2>Hello!</h2>
      <h2>I'm <span className='verdinho'>Lorrayne</span></h2>
      <h2>Front End Developer</h2>
      </S.DivH2s>
      <S.DivBtnAndP>
      <p>Currently located in Brazil, I love design and build <span className='verdinho'>Practical</span> and <span className='verdinho'>Simple</span> web pages.</p>
      <button onClick={PageExtra}>Let's get started</button>
      </S.DivBtnAndP>
    </S.Section>
  )
}

export default Home