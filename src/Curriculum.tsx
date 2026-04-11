import './App.css'
import Footer from './Footer'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import CurriculumIrian from '../public/curriculum/Curriculum_Irian_Padron_Medeiro.pdf'
import GiselliCV from '../public/curriculum/Giselli_CV.pdf'

function Curriculum() {
  const navigate = useNavigate()

  const files = [
    {
      title: 'Currículum Irian Padrón',
      filename: 'Curriculum_Irian_Padron_Medeiro.pdf',
      description: 'Ejemplo de currículum profesional y efectivo.',
      href: CurriculumIrian
    },
    {
      title: 'Currículum Giselli',
      filename: 'Giselli_CV.pdf',
      description: 'Diseño limpio y moderno para atraer mejores oportunidades.',
      href: GiselliCV
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
          <h1 className="display-5 fw-bold">Currículum Profesional</h1>
          <p className="lead mb-4">Presenta tus mejores logros con documentos visuales y bien diseñados.</p>
          <button className="btn btn-light btn-lg" onClick={goHome}>Volver al inicio</button>
        </div>
      </section>

      <section className="services py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Ejemplos de currículums</h2>
            <p className="text-muted">Mira currículums reales que he creado para clientes profesionales.</p>
          </div>
          <div className="row g-4">
            {files.map((file) => (
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

export default Curriculum
