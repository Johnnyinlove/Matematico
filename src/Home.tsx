import './App.css'
import Footer from './Footer'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import yo from '../public/yo.jpg';

import { useEffect } from "react";
import {Carousel} from 'bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
  const goToPortafolio = () => {
    navigate('/Matematico/Portafolio')
    window.scrollTo(0, 0)
  }
  const goToMarketing = () => {
    navigate('/Matematico/MarketingDigital')
    window.scrollTo(0, 0)
  }
  const goToCurriculum = () => {
    navigate('/Matematico/Curriculum')
    window.scrollTo(0, 0)
  }


useEffect(() => {
    const element = document.querySelector("#heroCarousel");

    if (element) {
      new Carousel(element, {
        interval: 4000,
        ride: "carousel",
        pause: false,
        touch: true,
        wrap: true
      });
    }
  }, []);

// data-bs-ride="carousel" data-bs-interval="3000" 

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
                <div id="heroCarousel" className="carousel slide hero-carousel">
                  <div className="carousel-inner rounded hero-carousel-inner">
                    <div className="carousel-item active hero-carousel-item">
                      <img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg" className="d-block w-100 hero-carousel-img" alt="Estudiantes aprendiendo matemáticas" />
                    </div>
                    <div className="carousel-item hero-carousel-item">
                      <img src="https://media.istockphoto.com/id/1866121335/pt/foto/physics-and-mathematics.jpg?s=612x612&w=is&k=20&c=Gcw6JAfiC01wAchXDB6NtmyeHoeAIjIIl25dTZo0y00=" className="d-block w-100 hero-carousel-img" alt="Universo matemático" />
                    </div>
                    <div className="carousel-item hero-carousel-item">
                      <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg" className="d-block w-100 hero-carousel-img" alt="Estudiante estudiando" />
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
            <h2 className="text-center mb-5">Mis Servicios Profesionales</h2>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-calculator fs-1 text-primary mb-3"></i>
                    <h5 className="card-title">Clases de Matemática</h5>
                    <p className="card-text">Clases personalizadas de matemática para todos los niveles, con énfasis en resultados y comprensión real.</p>
                    <button className="btn btn-primary" onClick={goToCursos}>Saber Más</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-megaphone fs-1 text-warning mb-3"></i>
                    <h5 className="card-title">Marketing Digital</h5>
                    <p className="card-text">Estrategias online para potenciar tu marca, gestionar redes y atraer nuevos clientes.</p>
                    <button className="btn btn-warning" onClick={goToMarketing}>Ver Trabajos</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-file-earmark-text fs-1 text-success mb-3"></i>
                    <h5 className="card-title">Confección de Currículum</h5>
                    <p className="card-text">Diseño de CV profesional, enfocado a destacar tu experiencia y oportunidades laborales.</p>
                    <button className="btn btn-success" onClick={goToCurriculum}>Ver Trabajos</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-currency-dollar fs-1 text-info mb-3"></i>
                    <h5 className="card-title">Impuestos de Renta</h5>
                    <p className="card-text">Asesoría y gestión completa de tu declaración de renta con precisión y confidencialidad.</p>
                    <button className="btn btn-info" onClick={goToAutor}>Contactar</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-phone fs-1 text-danger mb-3"></i>
                    <h5 className="card-title">Desbloqueo de Teléfonos</h5>
                    <p className="card-text">Servicio seguro de desbloqueo de dispositivos móviles para que puedas usar tu equipo libremente.</p>
                    <button className="btn btn-danger" onClick={goToAutor}>Contactar</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow">
                  <div className="card-body text-center">
                    <i className="bi bi-code-slash fs-1 text-info mb-3"></i>
                    <h5 className="card-title">Desarrollo Web</h5>
                    <p className="card-text">Creación de sitios web profesionales, aplicaciones y soluciones digitales para tu presencia online.</p>
                    <button className="btn btn-info" onClick={goToPortafolio}>Ver Portafolio</button>
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
              <div className="col-lg-6 text-center">
                <img src={yo} className="img-fluid rounded-circle author-photo" alt="Juan Cruz Oduardo" />
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
