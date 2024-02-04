import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import './index.css'
// import Contrasena from "./Cont rasena.tsx";
import Horario from './Horario.tsx'
import NotFound from "./NotFound.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cursos from './Cursos.tsx'
import  Autor  from "./Autor.tsx";
import Perfil from './Perfil.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/Matematico/' element={<Perfil/> }/>
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
