import  "./index.css"
// import React from 'react'
import ReactPlayer from 'react-player'
import Nav from './Nav'
import Footer from './Footer'
import Conjunto from "../public/matI/conjunto/Conferencia_Conjunto.pdf";
import Potencia from "/Conferencia_Series_de_Potencia.pdf";
import Edo from "/Conferencia_EDO.pdf";
import EdoN from "/Conferencia_EDO_N.pdf";
import Sledo from "/Conferencia_SLEDO.pdf";

export default function CursosMatI () {


  const Copy =()=>{
    
      let copy=document.getElementById('liveToastBtn');
      let copytext=copy?.innerText;
let copytexttext =copytext?.toString();
      // console.log(copytext);
    navigator.clipboard.writeText(copytexttext!);
    alert("Copiado al portapapeles");


  }


    // Función para copiar la URL actual al portapapeles
    const copiarUrl=()=> {
      const urlActual = window.location.href;

      navigator.clipboard.writeText(urlActual)
        .then(() => {
          alert('¡URL copiada al portapapeles!');
        })
        .catch((error) => {
          console.error('Error al copiar URL: ', error);
          alert('Hubo un error al intentar copiar la URL.');
        });
    }






return (
    <>
      <Nav />
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Matemática I</h1>
          <p className="lead">Conferencias detalladas sobre los temas fundamentales de Matemática I. Descarga los PDFs para estudiar a tu ritmo.</p>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                  Teoría de Conjunto
                </h5>
                <p className="card-text">Fundamentos de la teoría de conjuntos, operaciones básicas y conceptos fundamentales.</p>
                <div className="d-flex gap-2">
                  <a href={Conjunto} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    <i className="bi bi-eye me-1"></i>Ver PDF
                  </a>
                  <a href={Conjunto} download="Conferencia_Conjunto.pdf" className="btn btn-primary">
                    <i className="bi bi-download me-1"></i>Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                  Lógica Matemática
                </h5>
                <p className="card-text">Introducción a la lógica matemática, proposiciones, cuantificadores y demostraciones.</p>
                <div className="d-flex gap-2">
                  <a href={Potencia} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    <i className="bi bi-eye me-1"></i>Ver PDF
                  </a>
                  <a href={Potencia} download="Conferencia_Series_de_Potencia.pdf" className="btn btn-primary">
                    <i className="bi bi-download me-1"></i>Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                  Ecuaciones Diferenciales de Primer Orden
                </h5>
                <p className="card-text">Métodos de resolución de ecuaciones diferenciales ordinarias de primer orden.</p>
                <div className="d-flex gap-2">
                  <a href={Edo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    <i className="bi bi-eye me-1"></i>Ver PDF
                  </a>
                  <a href={Edo} download="Conferencia_EDO.pdf" className="btn btn-primary">
                    <i className="bi bi-download me-1"></i>Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                  Ecuaciones Diferenciales de Orden Superior
                </h5>
                <p className="card-text">Técnicas para ecuaciones diferenciales de orden n, incluyendo métodos de reducción.</p>
                <div className="d-flex gap-2">
                  <a href={EdoN} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    <i className="bi bi-eye me-1"></i>Ver PDF
                  </a>
                  <a href={EdoN} download="Conferencia_EDO_N.pdf" className="btn btn-primary">
                    <i className="bi bi-download me-1"></i>Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>
                  Sistema de Ecuaciones Diferenciales Lineales
                </h5>
                <p className="card-text">Análisis y resolución de sistemas de ecuaciones diferenciales lineales.</p>
                <div className="d-flex gap-2">
                  <a href={Sledo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    <i className="bi bi-eye me-1"></i>Ver PDF
                  </a>
                  <a href={Sledo} download="Conferencia_SLEDO.pdf" className="btn btn-primary">
                    <i className="bi bi-download me-1"></i>Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <div className="alert alert-info" role="alert">
            <i className="bi bi-info-circle me-2"></i>
            <strong>Nota:</strong> Estas conferencias están diseñadas para complementar tus estudios. Para clases personalizadas, contáctame.
          </div>
          <button className="btn btn-success btn-lg">Solicitar Clase Personalizada</button>
        </div>
      </div>
      <Footer />
    </>
  );
}