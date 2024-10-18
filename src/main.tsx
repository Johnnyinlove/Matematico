import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import NotFound from "./NotFound.tsx";
import Cursos from './CursosMatIII.tsx'
import  Autor  from "./Autor.tsx";
import Economia from "./Economia.tsx";
import MatI from "./CursosMatI";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/Matematico/' element={<Home/> }/>
      <Route path='/Matematico/Home' element={<Home/> }/>
      <Route path='/Matematico/CursoMatI' element={<MatI/> }/>
      <Route path='/Matematico/Cursos' element={<Cursos/> }/>
      <Route path='/Matematico/Economia' element={<Economia/> }/>
      <Route path='Matematico/Autor' element={<Autor/> }/>
      <Route path='/Matematico/*' element={<NotFound/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
