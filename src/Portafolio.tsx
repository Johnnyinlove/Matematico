import './App.css'
import Footer from './Footer'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

function Portafolio() {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/Matematico/')
    window.scrollTo(0, 0)
  }

  const projects = [
    {
      title: 'Primera Web',
      subtitle: 'Sitio creado en Amplify',
      description: 'Tu primera web publicada en AWS Amplify.',
      href: 'https://johnnyinlove.d3i5negfn33i3u.amplifyapp.com/'
    },
    {
      title: 'Segunda Web',
      subtitle: 'Otra web en Amplify',
      description: 'Tu segunda web publicada en AWS Amplify.',
      href: 'https://johnnyreact.d3if6eo00snogl.amplifyapp.com/'
    },
    {
      title: 'Cuarta Web',
      subtitle: 'Proyecto en GitHub Pages',
      description: 'Tu página publicada en GitHub Pages como muestra de portafolio.',
      href: 'https://johnnyinlove.github.io/RIIBA/'
    }
  ]

  return (
    <div className="app portfolio-page">
      <Nav />

      <section className="portfolio-hero text-white text-center py-5 bg-primary">
        <div className="container">
          <h1 className="display-5 fw-bold">Mi Portafolio de Páginas Web</h1>
          <p className="lead mb-4">Estas son las páginas web que yo creé y publiqué. Haz clic para abrirlas en una nueva pestaña.</p>
          <button className="btn btn-light btn-lg" onClick={goHome}>Volver al inicio</button>
        </div>
      </section>

      <section className="portfolio-list py-5">
        <div className="container">
          <div className="row gy-4">
            {projects.map((project) => (
              <div className="col-12 col-md-6 col-xl-4" key={project.title}>
                <div className="card project-card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{project.subtitle}</h6>
                    <p className="card-text flex-grow-1">{project.description}</p>
                    <a
                      className="btn btn-outline-primary mt-3 align-self-start"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir página
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portafolio
