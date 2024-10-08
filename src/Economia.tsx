
 import Economiaq from '../public/Economia.pdf';  

export default function Economia() {
    return(

<>  

<div className='container bg-success bg-opacity-25 p-5 border-opacity-75'>
<h1>Registro de Inversiones Tecno Turquino</h1>


<div className="container-sm color-primary">
<div>
  <div className='btn btn-primary'>
    <a className="fs-6 text-light"  href={Economiaq} target="_blank" rel="noopener"> 
    Ver Registro
    </a>
  </div>
</div>


<div className="margin-top-bottom">
  <div className='btn btn-primary'>
    <a className="fs-6 text-light"  href={Economiaq} target="_blank" rel="noopener noreferrer" download="Conferencia Series Numericas.pdf"> 
    Descargar Registro
    </a>
  </div>
</div>
</div>

</div>
</>
    )
}