import {} from 'react'
import { useNavigate } from "react-router-dom";
import svg from "./assets/react.svg";
import SliderMat from './SliderMat';

export default function Nav () {

  const navigate=useNavigate()

   const ReturnHome =()=> {
   navigate("/Matematico/Home");  
   }

   const goHorario =()=> {
   navigate("/Matematico/Horario");  
   }
   
   const goCursos =()=> {
   navigate("/Matematico/Cursos");  
   }





    return(

        <>


<nav className="navbar bg-alert-mio" data-bs-theme="dark">
    <ul className="nav nav-tabs">
  <li className="nav-item  ">
    <a onClick={ReturnHome} className="nav-link active" aria-current="page" href="#">
      <img src={svg} alt="svg" />
      Home</a>
  </li>
  <li className="nav-item dropdown active">
    <a className="nav-link dropdown-toggle color-new" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Matemática I</a>
    <ul className="dropdown-menu">
      <li><a onClick={goHorario} className="dropdown-item" href="#">Documentos</a></li>
      <li><a onClick={goCursos}  className="dropdown-item" href="#">Videos</a></li>
    </ul>
  </li>
  <li className="nav-item dropdown active">
    <a className="nav-link dropdown-toggle color-new" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Matemática III</a>
    <ul className="dropdown-menu">
      <li><a onClick={goHorario} className="dropdown-item" href="#">Documentos</a></li>
      <li><a onClick={goCursos}  className="dropdown-item" href="#">Videos</a></li>
    </ul>
  </li> 
   <li className="nav-item dropdown active">
    <a className="nav-link dropdown-toggle color-new" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Matemática IV</a>
    <ul className="dropdown-menu">
      <li><a onClick={goHorario} className="dropdown-item" href="#">Documentos</a></li>
      <li><a onClick={goCursos}  className="dropdown-item" href="#">Videos</a></li>
    </ul>
  </li>
</ul>

</nav>

<SliderMat/>

</>

);
}