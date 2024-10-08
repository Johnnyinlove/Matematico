import Economia from "../public/Economia.xlsx";

export default function Economia() {
    return(

<>        
<h1>Conferencias</h1>


<h2>Series Numericas</h2>

<div>
  <div className='btn btn-primary'>
    <a className="fs-6 text-light"  href={Economia} target="_blank" rel="noopener"> 
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
</>
    )
}