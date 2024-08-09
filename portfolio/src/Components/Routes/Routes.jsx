import React from 'react';
import * as S from './StyleRoute.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '../Home/Home.jsx';
import Projects from '../Projects/Projects.jsx';
import Contacts from '../Contacts/Contact.jsx';
import SkillsAndTools from '../Home/SkillsAndTools.jsx';


function Router() {
  return (
    <BrowserRouter>
    <nav>
      <S.Ul>
        <li><Link className='linkRoute' to='/'>Inicio</Link></li>
        <li><Link className='linkRoute' to='/Projects'>Projetos</Link></li>
        <li><Link className='linkRoute' to='/Contacts'>Fale comigo</Link></li>
      </S.Ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Contacts' element={<Contacts />} />
      <Route path='/SkillsAndTools' element={<SkillsAndTools />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router