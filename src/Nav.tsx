import {} from 'react'
import { useNavigate } from "react-router-dom";

export default function Nav () {

  const navigate=useNavigate()

   const ReturnHome =()=> {
   navigate("/Matematico/");  
   }

   
   const goCursos =()=> {
   navigate("/Matematico/Cursos");  
   }

   const goAutor =()=> {
    navigate("/Matematico/Autor");  
    }

   const goRepasoM =()=> {
    navigate("/Matematico/Autor");  
    }

   const goWebs =()=> {
    navigate("/Matematico/Autor");  
    }

   const goMusico =()=> {
    navigate("/Matematico/Musica");  
    }



    return(

        <>


<nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" onClick={ReturnHome} href="#" style={{cursor: 'pointer'}}>
      <i className="bi bi-calculator me-2"></i>Matemático
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={ReturnHome} href="#" style={{cursor: 'pointer'}}>Inicio</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="serviciosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul className="dropdown-menu" aria-labelledby="serviciosDropdown">
            <li><a className="dropdown-item" onClick={goCursos} href="#" style={{cursor: 'pointer'}}>Matemática</a></li>
            <li><a className="dropdown-item" onClick={goRepasoM} href="#" style={{cursor: 'pointer'}}>Repaso Matemática</a></li>
            <li><a className="dropdown-item" href="#">Inglés</a></li>
            <li><a className="dropdown-item" href="#">Informática</a></li>
            <li><a className="dropdown-item" href="#">Física</a></li>
            <li><a className="dropdown-item" href="#">Química</a></li>
            <li><a className="dropdown-item" onClick={goWebs} href="#" style={{cursor: 'pointer'}}>Desarrollo Web</a></li>
            <li><a className="dropdown-item" onClick={goMusico} href="#" style={{cursor: 'pointer'}}>Música</a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={goAutor} href="#" style={{cursor: 'pointer'}}>Sobre Mí</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>

);
}