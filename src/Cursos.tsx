import  "./index.css"
// import React from 'react'
import ReactPlayer from 'react-player'
import NavCursos from './NavCursos'
import Pink from "/A.W.Pink-Los_Atributos_de_Dios.pdf";

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



<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>





<p>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>






<h2>Series Numericas</h2>

<div className="container-fluid">
  <ReactPlayer 
  url='https://www.youtube.com/watch?v=q3PKNySW6LQ&list=PL9SnRnlzoyX0RE6_wcrTKaWj8cmQb3uO6'
    width='100%'
    // height='50%'
    controls
    loop
    volume={.5}
    />
      
</div>

<h3>Pink Los Atributos de Dios</h3>

<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Pink} target="_blank" rel="noopener"> 
      Ver PDF
      </a>
    </div>
</div>


<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Pink} target="_blank" rel="noopener noreferrer" download="Pink Los Atributos de Dios.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>


<h2>Series de Potencias</h2>


<div className="container-fluid">
  <ReactPlayer 
  url='https://www.youtube.com/watch?v=_w4sPyiNdBY'
    width='100%'
    // height='100%'
    controls
    loop
    volume={.5}
    />
      
</div>


<h2></h2>

<div className="container-fluid">
  <ReactPlayer 
  url='https://www.youtube.com/watch?v=GWS3PCBFVgI'
    width='100%'
    // height='100%'
    controls
    loop
    volume={.5}
    />
      
</div>


</>




);
}