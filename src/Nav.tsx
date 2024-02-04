import {} from 'react'
import { useNavigate } from "react-router-dom";
import svg from "./assets/react.svg";

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

   const goAutor =()=> {
    navigate("/Matematico/Autor");  
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

  <div className="btn-group">
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
  Repasador
  </button>
  <ul className="dropdown-menu">
    <li>
    
    <div className="btn-group dropend">
  <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  Cursos
  </button>
  <ul className="dropdown-menu">
    <li><a onClick={goCursos} className="dropdown-item" href="#">Matematica</a></li>
    <li><a className="dropdown-item" href="#">Ingles</a></li>
    <li><a className="dropdown-item" href="#">Informatica</a></li>
  </ul>
</div>
    
    <div className="btn-group dropend">
  <button onClick={goHorario}  type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  Horario
  </button>
</div>
</li>
</ul>


</div>
<div className="btn-group">
  <button className="btn bg-alert-mio dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
  Confección de Documentos
  </button>
  <ul className="dropdown-menu">
    <li>
    
    <div className="btn-group dropend">
  <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  Cursos
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Matematica</a></li>
    <li><a className="dropdown-item" href="#">Ingles</a></li>
    <li><a className="dropdown-item" href="#">Informatica</a></li>
  </ul>
</div>
    
    <div className="btn-group dropend">
  <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  Horario
  </button>
</div>
</li>
</ul>

</div>

<button onClick={goAutor} className="btn bg-alert-mio dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
Autor
  </button>



  </ul>









</nav>
</>

);
}