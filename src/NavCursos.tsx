import {} from 'react'
import { useNavigate } from "react-router-dom";
import svg from "./assets/react.svg";
import SliderMat from './SliderMat';

export default function Nav () {

  const navigate=useNavigate()

   const ReturnHome =()=> {
   navigate("/Matematico/");  
   }

   const goCursoMatI =()=> {
   navigate("/Matematico/CursoMatI");  
   } 
   
  
   
   const goMatIII =()=> {
    navigate("/Matematico/CursoMatIII");  
    }
 
   const goMatIV =()=> {
    navigate("/Matematico/CursoMatIV");  
    }





    return(

        <>


<nav className="navbar bg-alert-mio" data-bs-theme="dark">
    <ul className="nav nav-tabs">
  <li className="nav-item  ">
    <a onClick={ReturnHome} className="nav-link active" aria-current="page" href="#">
      <img src={svg} alt="svg" />
      Inicio</a>
  </li>
  <li className="nav-item dropdown active">
    <a onClick={goCursoMatI} className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Matemática I</a>
  </li>
  <li className="nav-item dropdown active">
    <a onClick={goMatIII} className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Matemática III</a>
  </li> 
   <li className="nav-item dropdown active">
    <a onClick={goMatIV} className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Matemática IV</a>
    {/* <ul className="dropdown-menu">
      <li><a onClick={goCursoMatI} className="dropdown-item" href="#">Documentos</a></li>
      <li><a onClick={goCursos}  className="dropdown-item" href="#">Videos</a></li>
    </ul> */}
  </li>
</ul>

</nav>


</>

);
}