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
import Numericasph from "../public/matIII/numerica.png"
import Potenciaph from "../public/matIII/potencia.png"
import Edoph from "../public/matIII/edo.png"
import EdoNph from "../public/matIII/edon.png"
import Sledoph from "../public/matIII/system.png"
import Finalph from '../public/matIII/final.png'
import { Document, Page } from 'react-pdf'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col } from "react-bootstrap";  
export default function Cursos () {


  // prueba de un resposive de la imgen pdf
  const [isMobile, setIsMobile] = useState(false); // Estado para identificar si es móvil 

  useEffect(() => {  
    const handleResize = () => {  
    setIsMobile(window.innerWidth <769); // Cambia768 por el ancho deseado para móviles 
    };  
   
    handleResize(); // Inicializa en caso de que ya esté en móvil
     window.addEventListener('resize', handleResize);  
   
    return () => window.removeEventListener('resize', handleResize);  
    },[]);  








return (

<>





<NavCursos/>

<nav className="bg-success p-2 text-dark bg-opacity-25">


<h1 className="text-center">Conferencias</h1>


  <h2 className="text-center">Series Numericas</h2>

  <Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="350" src={Numericas}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={Numericasph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Numericas} target="_blank" rel="noopener noreferrer" download="Conferencia de Series Numericas.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>







  <h2 className="text-center">Series de Potencias</h2>

  <Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="350" src={Potencia}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={Potenciaph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Potencia} target="_blank" rel="noopener noreferrer" download="Conferencia de Series de Potencias.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>





<h2 className="text-center">Ecuaciones diferenciales de Primer Orden</h2>

<Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="350" src={Edo}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={Edoph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Edo} target="_blank" rel="noopener noreferrer" download="Conferencia de EDO.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>



<h2 className="text-center">Ecuaciones diferenciales de Orden Superior</h2>

<Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="350" src={EdoN}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={EdoNph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={EdoN} target="_blank" rel="noopener noreferrer" download="Conferencia de EDO de orden nesimo.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>


<h2 className="text-center">Sistema de Ecuaciones Diferenciales Lineales</h2>





<Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="350" src={Sledo}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={Sledoph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Sledo} target="_blank" rel="noopener noreferrer" download="Conferencia de Sistema Lineal EDO.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>

<h2 className="text-danger text-center">Ejemplo de Prueba Final</h2>



<Container className="mt-5">  <div className="d-flex"> {!isMobile ? (  
 <iframe id="inlineFrameExample" title="Inline Frame Example" width="400" height="400" src={Final}  
 style={{ border: 'none'}}  />  
 ) : (  
 <img alt="snsmx"src={Finalph} className="w-100 h-auto border-5" />  
 )} 
</div>
  <div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Final} target="_blank" rel="noopener noreferrer" download="Prueba Final Matematica III.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>
</Container>
 




</nav>

</>




);
}