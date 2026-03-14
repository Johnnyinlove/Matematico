import './App.css'
import Footer from './Footer'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import yo from '../public/yo.jpg';

import { useEffect } from "react";
import { Carousel } from "bootstrap";


function Home() {
  const navigate = useNavigate()

  const goToCursos = () => {
    navigate('/Matematico/Cursos')
    window.scrollTo(0, 0)
  }
  const goToAutor = () => {
    navigate('/Matematico/Autor')
    window.scrollTo(0, 0)
  }


// Para iniciar el carusel al cargar la página
useEffect(() => {
  const myCarousel = document.querySelector("#heroCarousel");

  if (myCarousel) {
    new Carousel(myCarousel, {
      interval: 5000,
      ride: "carousel",
      pause: false
    });
  }
}, []);



  return (
    <>
      <div className='app'>




      <Nav />

        {/* Hero Section */}
       <section className="hero bg-primary text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold">Domina las Matemáticas con un Experto</h1>
                <p className="lead">Clases personalizadas adaptadas a tu ritmo. Aprende matemáticas de manera efectiva y divertida con Juan Cruz Oduardo, licenciado en Matemática.</p>
                <button className="btn btn-light btn-lg me-3 mb-2" onClick={goToCursos}>Ver Cursos</button>
                <button className="btn btn-outline-light btn-lg mb-2" onClick={goToAutor}>Sobre Mí</button>
              </div>
              <div className="col-lg-6">
                <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{height: '307px'}}>
                  <div className="carousel-inner rounded" style={{height: '100%'}}>
                    <div className="carousel-item active" style={{height: '100%'}}>
                      <img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg" className="d-block w-100" alt="Estudiantes aprendiendo matemáticas" style={{height: '100%', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item" style={{height: '100%'}}>
                      <img src="https://media.istockphoto.com/id/1866121335/pt/foto/physics-and-mathematics.jpg?s=612x612&w=is&k=20&c=Gcw6JAfiC01wAchXDB6NtmyeHoeAIjIIl25dTZo0y00=" className="d-block w-100" alt="Universo matemático" style={{height: '100%', objectFit: 'cover'}} />
                    </div>
                    <div className="carousel-item" style={{height: '100%'}}>
                      <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg" className="d-block w-100" alt="Estudiante estudiando" style={{height: '100%', objectFit: 'cover'}} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
       <section className="services py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Mis Servicios</h2>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-calculator fs-1 text-primary mb-3"></i>
                    <h5 className="card-title">Clases de Matemática</h5>
                    <p className="card-text">Desde básico hasta avanzado. Preparación para exámenes, refuerzo escolar y más.</p>
                    <button className="btn btn-primary" onClick={goToCursos}>Saber Más</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-book fs-1 text-success mb-3"></i>
                    <h5 className="card-title">Repaso de Asignaturas</h5>
                    <p className="card-text">Inglés, Informática, Física, Química y otras materias. Apoyo académico integral.</p>
                    <button className="btn btn-success">Contactar</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
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
                <img src={yo} className="img-fluid rounded-circle" style={{width: '200px'}} alt="Juan Cruz Oduardo" />
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
         {/*<section className="cta bg-primary text-white py-5">
          <div className="container text-center">
            <h2>¿Listo para mejorar tus notas en matemáticas?</h2>
            <p className="lead">Contáctame hoy y comienza tu viaje hacia el éxito académico.</p>
            <button className="btn btn-light btn-lg">Reservar Clase</button>
          </div>
        </section>*/}

          <Footer /> 
      </div>
    </>
  )
}

export default Home
