import {} from 'react'
import { useNavigate } from "react-router-dom";

export default function NavCursos() {

  const navigate = useNavigate()

  const ReturnHome = () => {
    navigate("/Matematico/");
  }

  const goCursoMatI = () => {
    navigate("/Matematico/CursoMatI");
  }

  const goMatIII = () => {
    navigate("/Matematico/CursoMatIII");
  }

  const goMatIV = () => {
    navigate("/Matematico/CursoMatIV");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" onClick={ReturnHome} href="#" style={{cursor: 'pointer'}}>
            <i className="bi bi-calculator me-2"></i>Cursos de Matemáticas
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCursos" aria-controls="navbarCursos" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCursos">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={ReturnHome} href="#" style={{cursor: 'pointer'}}>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={goCursoMatI} href="#" style={{cursor: 'pointer'}}>Matemática I</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={goMatIII} href="#" style={{cursor: 'pointer'}}>Matemática III</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={goMatIV} href="#" style={{cursor: 'pointer'}}>Matemática IV</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}