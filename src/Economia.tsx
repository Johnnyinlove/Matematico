
 import Economiaq from '/Economia.pdf';  

export default function Economia() {
    return(

<>  

<div className='container bg-success bg-opacity-25 p-5 border-opacity-75'>
<h1>Registro de Inversiones Tecno Turquino</h1>


<div className="container-sm color-primary">
<div>
  <div className='btn btn-primary'>
    <a className="fs-6 text-light"  href={Economiaq} target="_blank" rel="noopener noreferrer"> 
    Ver Registro
    </a>
  </div>
</div>


<div className="margin-top-bottom">
  <div className='btn btn-primary'>
    <a className="fs-6 text-light"  href={Economiaq} target="_blank" rel="noopener noreferrer" download="Registro de Economia TecnoTurquino.pdf"> 
    Descargar Registro
    </a>
  </div>
</div>
</div>

</div>
</>
    )
}