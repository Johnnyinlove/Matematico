import  "./index.css"
// import React from 'react'
import ReactPlayer from 'react-player'
import NavCursos from './NavCursos'
import Numericas from "/Conferencia _Series_Numericas.pdf";
import Potencia from "/Conferencia_Series_de_Potencia.pdf";
import Edo from "/Conferencia_EDO.pdf";
import EdoN from "/Conferencia_EDO_N.pdf";
import Sledo from "/Conferencia_SLEDO.pdf";

export default function Cursos () {


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



<button type="button" className="btn margin-top-bottom btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Indicaciones
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Que hago?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        En esta seccion podras encontrar las conferencias tocante al curso de Matematica III de la Universidad de Ciego de Avila
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


  <h2>Series Numericas</h2>

<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Numericas} target="_blank" rel="noopener"> 
      Ver PDF
      </a>
    </div>
</div>


<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Numericas} target="_blank" rel="noopener noreferrer" download="Conferencia Series Numericas.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>






  <h2>Series de Potencias</h2>

<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Potencia} target="_blank" rel="noopener"> 
      Ver PDF
      </a>
    </div>
</div>



<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Potencia} target="_blank" rel="noopener noreferrer" download="Conferencia Series de Potencia.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>




<h2>Ecuaciones diferenciales de Primer Orden</h2>

<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Edo} target="_blank" rel="noopener"> 
      Ver PDF
      </a>
    </div>
</div>



<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Edo} target="_blank" rel="noopener noreferrer" download="Conferencia EDO de primer orden.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>


<h2>Ecuaciones diferenciales de Orden Superior</h2>

<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={EdoN} target="_blank" rel="noopener"> 
      Ver PDF
      </a>
    </div>
</div>


<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={EdoN} target="_blank" rel="noopener noreferrer" download="Conferencia EDO de orden n-esimo.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>


<h2>Sistema de Ecuaciones Diferenciales Lineales</h2>

<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Sledo} target="_blank" rel="noopener"> 
      Ver PDF
      </a>
    </div>
</div>


<div className="margin-top-bottom">
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Sledo} target="_blank" rel="noopener noreferrer" download="Conferencia SLEDO.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>


</>




);
}