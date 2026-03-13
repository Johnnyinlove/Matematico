import './App.css'
import Footer from './Footer'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const goToCursos = () => navigate('/Matematico/Cursos')
  const goToAutor = () => navigate('/Matematico/Autor')

  return (
    <>
      <div className='App'>
        <Nav />

        {/* Hero Section */}
        <section className="hero bg-primary text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold">Domina las Matemáticas con un Experto</h1>
                <p className="lead">Clases personalizadas adaptadas a tu ritmo. Aprende matemáticas de manera efectiva y divertida con Juan Cruz Oduardo, licenciado en Matemática.</p>
                <button className="btn btn-light btn-lg me-3" onClick={goToCursos}>Ver Cursos</button>
                <button className="btn btn-outline-light btn-lg" onClick={goToAutor}>Sobre Mí</button>
              </div>
              <div className="col-lg-6">
                <img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg" className="img-fluid rounded" alt="Estudiantes aprendiendo" />
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="services py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Mis Servicios</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-calculator fs-1 text-primary mb-3"></i>
                    <h5 className="card-title">Clases de Matemática</h5>
                    <p className="card-text">Desde básico hasta avanzado. Preparación para exámenes, refuerzo escolar y más.</p>
                    <button className="btn btn-primary" onClick={goToCursos}>Saber Más</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-book fs-1 text-success mb-3"></i>
                    <h5 className="card-title">Repaso de Asignaturas</h5>
                    <p className="card-text">Inglés, Informática, Física, Química y otras materias. Apoyo académico integral.</p>
                    <button className="btn btn-success">Contactar</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-code-slash fs-1 text-info mb-3"></i>
                    <h5 className="card-title">Desarrollo Web</h5>
                    <p className="card-text">Creación de sitios web profesionales, aplicaciones y soluciones digitales.</p>
                    <button className="btn btn-info">Ver Portafolio</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mí Breve */}
        <section className="about py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src="/yo.jpg" className="img-fluid rounded-circle" alt="Juan Cruz Oduardo" style={{width: '200px'}} />
              </div>
              <div className="col-lg-6">
                <h2>Sobre Juan Cruz Oduardo</h2>
                <p>Licenciado en Matemática con experiencia en enseñanza. Apasionado por ayudar a estudiantes a superar desafíos matemáticos y alcanzar sus metas académicas.</p>
                <button className="btn btn-primary" onClick={goToAutor}>Conoce Más</button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta bg-primary text-white py-5">
          <div className="container text-center">
            <h2>¿Listo para mejorar tus notas en matemáticas?</h2>
            <p className="lead">Contáctame hoy y comienza tu viaje hacia el éxito académico.</p>
            <button className="btn btn-light btn-lg">Reservar Clase</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Home
