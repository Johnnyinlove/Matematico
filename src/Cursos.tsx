import "./index.css"
import Nav from './Nav'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function Cursos() {
  const navigate = useNavigate()

  const goToMatI = () => {navigate('/Matematico/CursoMatI');  
      window.scrollTo(0, 0)}

  const goToMatIII = () => {navigate('/Matematico/CursoMatIII');  
      window.scrollTo(0, 0)}
  const goToMatIV = () => {navigate('/Matematico/CursoMatIV');  
      window.scrollTo(0, 0)}

  return (
    <>
      <Nav />
      <div className="container py-5">
        <h1 className="text-center mb-5">Catálogo de Cursos</h1>
        <p className="text-center lead mb-5">Explora mis cursos de matemáticas y otras asignaturas. Cada curso está diseñado para maximizar tu aprendizaje.</p>

        <div className="row">
          <div className="col-md-5 mb-5">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Matemática I</h5>
                <p className="card-text">Fundamentos de matemáticas para estudiantes de nivel básico. Álgebra, geometría y cálculo elemental.</p>
                <button className="btn btn-primary" onClick={goToMatI}>Ver Detalles</button>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-5">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Matemática III</h5>
                <p className="card-text">Matemáticas avanzadas incluyendo cálculo diferencial, integral y ecuaciones diferenciales.</p>
                <button className="btn btn-primary" onClick={goToMatIII}>Ver Detalles</button>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-5">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Matemática IV</h5>
                <p className="card-text">Temas avanzados en matemáticas aplicadas, estadística y probabilidad.</p>
                <button className="btn btn-primary" onClick={goToMatIV}>Ver Detalles</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h3>Otras Asignaturas</h3>
          <p>Además de matemáticas, ofrezco clases en:</p>
          <ul className="list-inline">
            <li className="list-inline-item badge bg-secondary fs-6 p-2 m-1">Inglés</li>
            <li className="list-inline-item badge bg-secondary fs-6 p-2 m-1">Informática</li>
            <li className="list-inline-item badge bg-secondary fs-6 p-2 m-1">Física</li>
            <li className="list-inline-item badge bg-secondary fs-6 p-2 m-1">Química</li>
          </ul>
          <button className="btn btn-success btn-lg mt-3">Contactar para Más Información</button>
        </div>
      </div>
      <Footer />
    </>
  )
}




