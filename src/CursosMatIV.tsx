import  "./index.css"
import {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import NavCursos from './NavCursos'
import FinalCD from "../public/matIV/Final_Numerica_CD.pdf";
import FinalCDph from "../public/matIV/FinalCD.png";
import FinalCPE from "../public/matIV/Final_Numerica_CPE.pdf";
import FinalCPEph from "../public/matIV/FinalCPE.png";
import SolEcua from "../public/matIV/Conferencia_Solucion_Ecuaciones.pdf"
import SolEcuaph from "../public/matIV/solEcua.png"
import AjusteDatos from "../public/matIV/Conferencia_Aproximacion_Funciones.pdf"
import AjusteDatosph from "../public/matIV/AproximacionFunciones.png"
import IntegraNum from "../public/matIV/Conferencia_Integracion_Numerica.pdf"
import IntegraNumph from "../public/matIV/IntegracionNumerica.png"
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

 








return (

<>





<NavCursos/>

<nav className="bg-success p-2 text-dark  bg-opacity-25">


<h1 className="text-center">Conferencias</h1>

<div className="border margin-top-bottom border-2 border-opacity-100 border-secondary bg-body rounded-3">

  <h2 className="text-center">Teoria de Error y Solución de Ecuaciones</h2>

  <Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="350" src={SolEcua}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={SolEcuaph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={SolEcua} target="_blank" rel="noopener noreferrer" download="Conferencia de Solucion de Ecuaciones.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>
</div>






<div className="border margin-top-bottom border-2 border-opacity-100 border-secondary bg-body rounded-3">

  <h2 className="text-center">Aproximación de Funciones</h2>

  <Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="350" src={AjusteDatos}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={AjusteDatosph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={AjusteDatos} target="_blank" rel="noopener noreferrer" download="Conferencia de Aproximación de Funciones.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>
</div>




<div className="border margin-top-bottom border-2 border-opacity-100 border-secondary bg-body rounded-3">

<h2 className="text-center">Integración Numérica</h2>

<Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="350" src={IntegraNum}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={IntegraNumph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={IntegraNum} target="_blank" rel="noopener noreferrer" download="Conferencia de EDO.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>
</div>




<div className="border margin-top-bottom border-2 border-opacity-100 border-secondary bg-body rounded-3">

<h2 className="text-danger text-center">Trabajos Finales</h2>



<Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="400" src={FinalCD}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={FinalCDph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={FinalCD} target="_blank" rel="noopener noreferrer" download="Prueba Final Matematica III.pdf"> 
      Descargar CD
      </a>
    </div>
</div>
</Container>

<Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="400" src={FinalCPE}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={FinalCPEph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={FinalCPE} target="_blank" rel="noopener noreferrer" download="Prueba Final Matematica III.pdf"> 
      Descargar CPE
      </a>
    </div>
</div>
</Container>
 
</div>




</nav>


</>




);
}