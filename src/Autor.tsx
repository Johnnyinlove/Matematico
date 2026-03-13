import './App.css'
import yo from '../public/yo.jpg';
import { useNavigate } from "react-router-dom";


function Autor() {
  // const [count, setCount] = useState(0)

  const navigate=useNavigate()

  const ReturnHome =()=> {
    navigate("/Matematico/");  
    }




  return (
    <>

{/*  */}

    <div className='App'>

    <div className="card mb-3 shadow-lg">
    <a onClick={ReturnHome} href="#" className="btn btn-primary position-absolute top-0 start-0 m-3">← Inicio</a>
    <div className="text-center py-4 bg-light">
      <img src={yo} className="img-fluid rounded-circle mb-3" style={{width: '150px', height: '150px', objectFit: 'cover', border: '5px solid rgba(0, 123, 255, 0.4)'}} alt="Perfil de Juan"/>
      <h1 className="display-5 fw-bold text-primary">Juan Cruz Oduardo</h1>
      <p className="lead text-muted">Profesor de Matemática | Experto en Enseñanza Personalizada</p>
      <p className="text-secondary">Ayudando a estudiantes a dominar las matemáticas con pasión y dedicación.</p>
    </div>



  <div className="row g-0">




<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Nivel Académico</h5>
        <div className="card-text">
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-mortarboard me-2 text-primary" style={{fontSize: '1.2em'}}></i>
            <strong>Licenciado en Matemática</strong>
          </div>
          <p className="mb-0">Universidad de Oriente, Santiago de Cuba, Cuba.</p>
        </div>

<hr />
        <h5 className="card-title"> Habilidades informáticas </h5>
        <div className="card-text">
          <div className="mb-3">
            <strong>Microsoft Office (Word, PowerPoint, Excel):</strong> Medio
            <div className="progress mt-1" style={{height: '25px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <div className="progress-bar" style={{width: '60%', background: 'linear-gradient(45deg, #87ceeb, #4682b4)', borderRadius: '10px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 0 5px rgba(135,206,235,0.5)'}}>60%</div>
            </div>
          </div>
          <div className="mb-3">
            <strong>Programación (C++, Linux, Wolfram Mathematica, HTML, CSS, JavaScript, TypeScript):</strong> Básico
            <div className="progress mt-1" style={{height: '25px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <div className="progress-bar" style={{width: '30%', background: 'linear-gradient(45deg, #00bfff, #1e90ff)', borderRadius: '10px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 0 5px rgba(0,191,255,0.5)'}}>30%</div>
            </div>
          </div>
          <div className="mb-3">
            <strong>Herramientas (LATEX, Microsoft Windows, Redes Sociales e Internet):</strong> Medio
            <div className="progress mt-1" style={{height: '25px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <div className="progress-bar" style={{width: '60%', background: 'linear-gradient(45deg, #4169e1, #000080)', borderRadius: '10px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 0 5px rgba(65,105,225,0.5)'}}>60%</div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <a className="btn btn-outline-primary me-2" href="https://johnnyinlove.d3i5negfn33i3u.amplifyapp.com/" role="button" target="_blank" rel="noopener noreferrer">Primera Web</a>
          <a className="btn btn-outline-primary me-2" href="https://johnnyreact.d3if6eo00snogl.amplifyapp.com/" role="button" target="_blank" rel="noopener noreferrer">Segunda Web</a>
          <a className="btn btn-outline-primary" href="https://johnnyinlove.github.io/RIIBA/" role="button" target="_blank" rel="noopener noreferrer">Cuarta Web</a>
        </div>


<hr />
        <h5 className="card-title"> Habilidades lingüisticas </h5>
        <div className="card-text">
          <div className="mb-2">
            <strong>Español:</strong> Materna
            <div className="progress mt-1" style={{height: '25px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <div className="progress-bar" style={{width: '100%', background: 'linear-gradient(45deg, #4169e1, #000080)', borderRadius: '10px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 0 5px rgba(135,206,235,0.5)'}}>100%</div>
            </div>
          </div>
          <div className="mb-2">
            <strong>Portugués:</strong> Medio
            <div className="progress mt-1" style={{height: '25px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <div className="progress-bar" style={{width: '60%', background: 'linear-gradient(45deg, #00bfff, #1e90ff)', borderRadius: '10px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 0 5px rgba(0,191,255,0.5)'}}>60%</div>
            </div>
          </div>
          <div className="mb-2">
            <strong>English:</strong> Básico
            <div className="progress mt-1" style={{height: '25px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <div className="progress-bar" style={{width: '30%', background: 'linear-gradient(45deg, #87ceeb, #4682b4)', borderRadius: '10px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 0 5px rgba(65,105,225,0.5)'}}>30%</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <h4 className="text-primary">¡Transforma tu futuro matemático hoy!</h4>
          <p className="text-muted">Clases personalizadas adaptadas a tu ritmo y necesidades.</p>
        </div>
      </div>

    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">

      <div className="card-body grid text-center">

    <h5 className="card-title text-center mb-4">Contáctame y Reserva tu Clase</h5>
    <div className="row g-3 justify-content-center">
      <div className="col-6 col-md-3">
        <a href="https://wa.me/5356908535/?text=Olá%20Juan!%20Vi%20seu%20anúncio%20e%20tenho%20interesse%20nas%20aulas%20de%20matemática." className="btn btn-success btn-lg w-100 d-flex flex-column align-items-center" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp fs-1 mb-2"></i>
          <span>WhatsApp</span>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a href="https://www.facebook.com/juan.cruzoduardo" className="btn btn-primary btn-lg w-100 d-flex flex-column align-items-center" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook fs-1 mb-2"></i>
          <span>Facebook</span>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a href="https://t.me/Whatwho01" className="btn btn-info btn-lg w-100 d-flex flex-column align-items-center" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-telegram fs-1 mb-2"></i>
          <span>Telegram</span>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a href="mailto:johnmanito3@gmail.com" className="btn btn-danger btn-lg w-100 d-flex flex-column align-items-center" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-envelope fs-1 mb-2"></i>
          <span>Email</span>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a href="https://www.linkedin.com/in/john-manito-bb4b02259" className="btn btn-secondary btn-lg w-100 d-flex flex-column align-items-center" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin fs-1 mb-2"></i>
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a href="https://github.com/Johnnyinlove" className="btn btn-dark btn-lg w-100 d-flex flex-column align-items-center" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github fs-1 mb-2"></i>
          <span>GitHub</span>
        </a>
      </div>
      <div className="col-6 col-md-3">
        <a href="https://www.notion.so/Getting-Started-on-Mobile-8d98ea3f4d1441c68f8a9d8bc4e9ba6f?pvs=4" className="btn btn-light btn-lg w-100 d-flex flex-column align-items-center border" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-file-earmark-text fs-1 mb-2 text-dark"></i>
          <span>Notion</span>
        </a>
      </div>
    </div>
    
     
  

      </div>
    </div>
  </div>
</div>



    
  </div>




</div>




</div>

    
  

    
    </>
  )
}

export default Autor
