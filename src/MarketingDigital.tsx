import './App.css'
import Footer from './Footer'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import Manicura from '../public/marketingDigital/manicura.pdf'

function MarketingDigital() {
  const navigate = useNavigate()

  const pdfFiles = [
    {
      title: 'Campana de redes sociales',
      filename: 'manicura.pdf',
      description: 'Ejemplo de una campaña digital con contenidos y estrategia visual.',
      href: Manicura
    }
  ]

  const goHome = () => {
    navigate('/Matematico/')
    window.scrollTo(0, 0)
  }

  return (
    <div className="app portfolio-page">
      <Nav />

      <section className="portfolio-hero text-white text-center py-5 bg-primary">
        <div className="container">
          <h1 className="display-5 fw-bold">Marketing Digital</h1>
          <p className="lead mb-4">Mira ejemplos reales de marketing digital realizados para clientes.</p>
          <button className="btn btn-light btn-lg" onClick={goHome}>Volver al inicio</button>
        </div>
      </section>

      <section className="services py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Trabajos de Marketing Digital</h2>
            <p className="text-muted">Visualiza los documentos de campañas publicitarias, diseño de contenidos y planes estratégicos.</p>
          </div>
          <div className="row g-4">
            {pdfFiles.map((file) => (
              <div className="col-12 col-md-6" key={file.filename}>
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <div className="mb-3">
                      <span className="badge bg-secondary">PDF Importante</span>
                    </div>
                    <h5 className="card-title">
                      <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                      {file.title}
                    </h5>
                    <p className="card-text">{file.description}</p>
                    <div className="d-flex gap-2 flex-wrap">
                      <a href={file.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                        <i className="bi bi-eye me-1"></i>Ver PDF
                      </a>
                      <a href={file.href} download={file.filename} className="btn btn-primary">
                        <i className="bi bi-download me-1"></i>Descargar
                      </a>
                    </div>
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

export default MarketingDigital
