import  "./index.css"
import {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import NavCursos from './NavCursos'
import Numericas from "/Conferencia _Series_Numericas.pdf";
import Potencia from "/Conferencia_Series_de_Potencia.pdf";
import Edo from "/Conferencia_EDO.pdf";
import EdoN from "/Conferencia_EDO_N.pdf";
import Sledo from "/Conferencia_SLEDO.pdf";
import Final from "../public/Modelo_de_Prueba_Final_Mat_III.pdf";
import imga from "../public/404.jpg"
import { Document, Page } from 'react-pdf'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col } from "react-bootstrap";  
export default function Cursos () {


  // prueba de un resposive de la imgen pdf
  const [isMobile, setIsMobile] = useState(false); // Estado para identificar si es móvil 

  useEffect(() => {  
    const handleResize = () => {  
    setIsMobile(window.innerWidth <768); // Cambia768 por el ancho deseado para móviles 
    };  
   
    handleResize(); // Inicializa en caso de que ya esté en móvil
     window.addEventListener('resize', handleResize);  
   
    return () => window.removeEventListener('resize', handleResize);  
    },[]);  

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





<NavCursos/>

<nav className="bg-success p-2 text-dark bg-opacity-25">

<button type="button" className="btn margin-top-bottom btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Indicaciones
</button>

<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Que hago?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        En esta seccion podrás encontrar las conferencias tocante al curso de Matematica IV de la Universidad de Ciego de Avila
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* <p>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p> */}


{/* <div className="container-fluid">
  <ReactPlayer 
  url='https://www.youtube.com/watch?v=q3PKNySW6LQ&list=PL9SnRnlzoyX0RE6_wcrTKaWj8cmQb3uO6'
  width='100%'
  // height='50%'
  controls
  loop
  volume={.5}
  />
  
  </div> */}


<h1>Conferencias</h1>


  <h2>Solucion de Ecuaciones</h2>

  <iframe id="inlineFrameExample" 
    title="Inline Frame Example" 
    width="300" 
    height="200" 
    src={Numericas}> 
</iframe>


<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Numericas} target="_blank" rel="noopener noreferrer" download="Conferencia Series Numericas.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>






  <h2>Series de Potencias</h2>

  <iframe id="inlineFrameExample" 
    title="Inline Frame Example" 
    width="300" 
    height="200" 
    src={Potencia}> 
</iframe>



<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Potencia} target="_blank" rel="noopener noreferrer" download="Conferencia Series de Potencia.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>




<h2>Ecuaciones diferenciales de Primer Orden</h2>

<iframe id="inlineFrameExample" 
    title="Inline Frame Example" 
    width="300" 
    height="200" 
    src={Edo}> 
</iframe>



<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Edo} target="_blank" rel="noopener noreferrer" download="Conferencia EDO de primer orden.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>


<h2>Ecuaciones diferenciales de Orden Superior</h2>

<iframe id="inlineFrameExample" 
    title="Inline Frame Example" 
    width="300" 
    height="200" 
    src={EdoN}> 
</iframe>


<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={EdoN} target="_blank" rel="noopener noreferrer" download="Conferencia EDO de orden n-esimo.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>


<h2>Sistema de Ecuaciones Diferenciales Lineales</h2>

<iframe id="inlineFrameExample" 
    title="Inline Frame Example" 
    width="300" 
    height="200" 
    src={Sledo}> 
</iframe>


<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Sledo} target="_blank" rel="noopener noreferrer" download="Conferencia SLEDO.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>

<h2 className="text-danger">Ejemplo de Prueba Final</h2>

{/* <div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Final} target="_blank" rel="noopener"> 
      Ver PDF
      </a>
    </div>
</div> */}

<iframe id="inlineFrameExample" 
    title="Inline Frame Example" 
    width="300" 
    height="200" 
    src={Final}> 
</iframe>


<Container className="mt-5"> <Row> <Col md={12}> <h1 className="text-center">PDF Viewer</h1> <div className="d-flex justify-content-center"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="300" height="200" src={Final}  
 style={{ border: 'none' }}  />  
 ) : (  
 <img alt="snsmx"src={imga} className="w-100 h-auto border-5" />  
 )}  
 { !isMobile && (  
 <Document file={Final}> <Page pageNumber={1} /> </Document> )}  
 </div> </Col> </Row> </Container>
 

<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Final} target="_blank" rel="noopener noreferrer" download="Prueba Final Matematica III.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>


</nav>

</>




);
}