import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate()

  const goHome = () => navigate("/Matematico/")
  const goCursos = () => navigate("/Matematico/Cursos")
  const goAutor = () => navigate("/Matematico/Autor")

  return (
    <>
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>Matemático</h5>
              <p>Clases personalizadas de matemáticas y otras asignaturas. Ayudando a estudiantes a alcanzar el éxito académico.</p>
              <button className="btn btn-primary" onClick={goHome}>Inicio</button>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Enlaces Rápidos</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none" onClick={goCursos}>Cursos</a></li>
                <li><a href="#" className="text-light text-decoration-none" onClick={goAutor}>Sobre Mí</a></li>
                <li><a href="mailto:johnmanito3@gmail.com" className="text-light text-decoration-none">Contacto</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contacto</h5>
              <p><i className="bi bi-envelope me-2"></i>johnmanito3@gmail.com</p>
              <p><i className="bi bi-telephone me-2"></i>+53 56908535</p>
              <div>
                <a href="https://wa.me/5356908535" className="text-light me-3" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp fs-4"></i></a>
                <a href="https://www.facebook.com/juan.cruzoduardo" className="text-light me-3" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook fs-4"></i></a>
                <a href="https://www.linkedin.com/in/john-manito-bb4b02259" className="text-light" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin fs-4"></i></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <p>&copy; 2026 Juan Cruz Oduardo. Todos los derechos reservados.</p>
            <p>Desarrollado con <i className="bi bi-heart-fill text-danger"></i> para la educación.</p>
          </div>
        </div>
      </footer>
    </>
  );
}