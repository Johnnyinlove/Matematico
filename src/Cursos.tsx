import  "./index.css"
// import React from 'react'
import NavCursos from './NavCursos'
import Slider from "./Slider";
import SliderMat from "./SliderMat"

export default function Cursos () {



return (

<>





<NavCursos/>
<SliderMat/>
<nav className=" px-2 text-dark bg-opacity-25">

<button type="button" className="btn margin-top-bottom btn-outline-info witha" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
En la parte superior se encuentran la documentación necesaria y suficiente de las asignaturas impartidas por el Lic. Juan Cruz Oduardo en la UNICA      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cerrar</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>



</nav>

</>




);
}