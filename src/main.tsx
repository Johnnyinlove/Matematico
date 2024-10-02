import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import Horario from './Horario.tsx'
import NotFound from "./NotFound.tsx";
import Cursos from './Cursos.tsx'
import  Autor  from "./Autor.tsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/Matematico/' element={<Home/> }/>
      <Route path='/Matematico/Home' element={<Home/> }/>
      <Route path='/Matematico/Horario' element={<Horario/> }/>
      <Route path='/Matematico/Cursos' element={<Cursos/> }/>
      {/* <Route path='/MathSolution/Contrasena' element={<Contrasena/> }/> */}
      <Route path='Matematico/Autor' element={<Autor/> }/>
      <Route path='/Matematico/*' element={<NotFound/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
