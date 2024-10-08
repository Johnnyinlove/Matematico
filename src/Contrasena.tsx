import {} from "react";

export default function Segurity () {



    return (
<>
<div className="container">

<form className="row g-3">
  <div className="col-auto">
    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
    <input type="text" title="ss" className="form-control-plaintext" id="staticEmail2" value="Usuario Protegido"/>
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Contraseña</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Contraseña"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Aceptar</button>
  </div>
</form>
</div>


</>

    );
}